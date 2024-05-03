import { Injectable, inject } from '@angular/core';
import { TASKS } from '../constants/constants'

import { Task } from '../models/task';
import { TaskGroup } from '../models/taskgroup';
import { Subject } from 'rxjs';
import { Firestore, Unsubscribe, addDoc, collection, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private firestore: Firestore = inject(Firestore);
  private taskGroupsListenerUnsub: Unsubscribe;
  public taskGroups$: Subject<TaskGroup[]> = new Subject<TaskGroup[]>();


  constructor() {
    this.getTasksObservable();
  }

  public async addTask(newTask: Task): Promise<void> {
    const docRef = await addDoc(collection(this.firestore, 'tasks'), newTask);
    // console.log("Document written with ID: ", docRef.id);
  }

  private getTasksObservable(): void {
    this.taskGroupsListenerUnsub = onSnapshot(collection(this.firestore, 'tasks'), (result) => {
      const taskGroups: Task[] = result.docs.map(task => task.data() as Task);
      this.taskGroups$.next(this.getCategorizedTasks(taskGroups));
    });
  }

  private getCategorizedTasks(tasks: Task[]): TaskGroup[] {
    const groups: TaskGroup[] = [];
    for (let i = 0; i < tasks.length; i++) {
      const taskCategory = tasks[i].category;
      let group = groups.find(group => group.category == taskCategory);
      if (!group) {
        group = { category: taskCategory, tasks: [] };
        groups.push(group);
      }
      group.tasks.push(tasks[i]);
    }
    return groups;
  }
}

import { Injectable, inject } from '@angular/core';
import { DAYS_OF_WEEK, TASKS, TASK_COMPLETIONS } from '../constants/constants'

import { Task } from '../models/task';
import { TaskGroup } from '../models/taskgroup';
import { Subject } from 'rxjs';
import { Firestore, Unsubscribe, addDoc, collection, deleteDoc, doc, onSnapshot, setDoc } from '@angular/fire/firestore';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private firestore: Firestore = inject(Firestore);
  private dateService: DateService = inject(DateService);
  private taskGroupsListenerUnsub: Unsubscribe;
  private taskGroups: TaskGroup[];
  public taskGroups$: Subject<TaskGroup[]> = new Subject<TaskGroup[]>();


  constructor() {
    this.getTasksObservable();
    this.setTaskGroupsObservable();
  }

  public getAllTaskGroups(): TaskGroup[] {
    return this.taskGroups;
  }

  public async addTask(newTask: Task): Promise<void> {
    const docRef = await addDoc(collection(this.firestore, 'tasks'), newTask);
    // console.log("Document written with ID: ", docRef.id);
  }

  public async updateTask(updatedTask: Task): Promise<void> {
    const docRef = doc(this.firestore, `tasks/${updatedTask.id}`);
    await setDoc(docRef, updatedTask);
  }

  public async deleteTask(taskToDelete: Task): Promise<void> {
    const docRef = doc(this.firestore, `tasks/${taskToDelete.id}`);
    await deleteDoc(docRef);
  }

  private setTaskGroupsObservable(): void {
    this.taskGroups$.subscribe(x => {
      this.taskGroups = x;
    });
  }

  private getTasksObservable(): void {
    this.taskGroupsListenerUnsub = onSnapshot(collection(this.firestore, 'tasks'), (result) => {
      const tasks: Task[] = result.docs.map(taskData => {
        const task: Task = taskData.data() as Task;
        task.id = taskData.id;
        return task;
      });
      const taskGroups = this.categorizedTasks(tasks);
      this.setMonthDayTasks(taskGroups);
    });
  }

  private categorizedTasks(tasks: Task[]): TaskGroup[] {
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
    // return groups;
    // this.taskGroups$.next(groups);
    return groups;
  }

  private setMonthDayTasks(taskGroups: TaskGroup[]): void {
    const monthObj = this.dateService.getMonthObject();
    // number
    // twoDigitString
    // name
    // year
    // daysInMonth
    // dayOffset

    let tg = JSON.parse(JSON.stringify(taskGroups));
    console.log(tg[1].tasks[0].isComplete, taskGroups[1].tasks[0].isComplete);
    tg[1].tasks[0].isComplete = false;
    console.log(tg[1].tasks[0].isComplete, taskGroups[1].tasks[0].isComplete);

    const monthDays = Array.from({length: monthObj.daysInMonth}, (_, i) => {
      const dayNum = i + 1;
      const monthDay: any = { date: dayNum, day: DAYS_OF_WEEK[(i + monthObj.dayOffset) % 7] }
      
      // monthDay.taskGroups = taskGroups.map(taskGroup => {
      //   taskGroup.tasks = taskGroup.tasks.map(task => {
      //     const dateId = `${monthObj.year}${monthObj.twoDigit}${('0' + dayNum).slice(-2)}`
      //     task.isComplete = !!TASK_COMPLETIONS.find(x => x.date == dateId && x.taskid == task.id);
      //     return task;
      //   });
      //   return taskGroup;
      // });


      monthDay.taskGroups = taskGroups;

      return monthDay;
    });


    // console.log(monthDays);
  }
}

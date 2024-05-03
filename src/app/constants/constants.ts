import { Task } from "../models/task";

export const TASKS: Task[] = [
    {
        name: 'atg split squats',
        description: 'With support text underneath to add more detail',
        category: 'workout',
        isComplete: true
    },
    {
        name: 'squat hold',
        description: 'With support text underneath to add more detail',
        category: 'workout',
        isComplete: false
    },
    {
        name: 'leg raise',
        description: 'With support text underneath to add more detail',
        category: 'workout',
        isComplete: false
    },
    {
        name: 'design patterns',
        description: 'read one design pattern on refactoring gurus',
        category: 'learn',
        isComplete: false
      },
      {
        name: 'csharp',
        description: 'learn a new csharp concent',
        category: 'learn',
        isComplete: false
      },
      {
        name: 'personal project',
        description: 'write a few lines of code on habito or chordcraft',
        category: 'learn',
        isComplete: false
      },
      {
        name: 'read bible',
        description: 'read a section with title in 1 peter',
        category: 'faith',
        isComplete: false
      },
      {
        name: 'bible sermon',
        description: 'research for my sermon for the youth',
        category: 'faith',
        isComplete: false
      },
      {
        name: 'lina food',
        description: 'prepare chicken for lina',
        category: 'chores',
        isComplete: false
      },
]
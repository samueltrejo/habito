import { Task } from "../models/task";

export const DAYS_OF_WEEK = [
  {abbreviation: 'Sun', fullName: 'Sunday'},
  {abbreviation: 'Mon', fullName: 'Monday'},
  {abbreviation: 'Tue', fullName: 'Tuesday'},
  {abbreviation: 'Wed', fullName: 'Wednesday'},
  {abbreviation: 'Thu', fullName: 'Thursday'},
  {abbreviation: 'Fri', fullName: 'Friday'},
  {abbreviation: 'Sat', fullName: 'Saturday'},
]

export const TASK_FORM_TEMPLATE: Task = {
  id: '',
  name: '',
  description: '',
  category: '',
  isComplete: false
}

export const TASKS: Task[] = [
    {
        id: '',
        name: 'atg split squats',
        description: 'With support text underneath to add more detail',
        category: 'workout',
        isComplete: true
    },
    {
        id: '',
        name: 'squat hold',
        description: 'With support text underneath to add more detail',
        category: 'workout',
        isComplete: false
    },
    {
        id: '',
        name: 'leg raise',
        description: 'With support text underneath to add more detail',
        category: 'workout',
        isComplete: false
    },
    {
        id: '',
        name: 'design patterns',
        description: 'read one design pattern on refactoring gurus',
        category: 'learn',
        isComplete: false
      },
      {
        id: '',
        name: 'csharp',
        description: 'learn a new csharp concent',
        category: 'learn',
        isComplete: false
      },
      {
        id: '',
        name: 'personal project',
        description: 'write a few lines of code on habito or chordcraft',
        category: 'learn',
        isComplete: false
      },
      {
        id: '',
        name: 'read bible',
        description: 'read a section with title in 1 peter',
        category: 'faith',
        isComplete: false
      },
      {
        id: '',
        name: 'bible sermon',
        description: 'research for my sermon for the youth',
        category: 'faith',
        isComplete: false
      },
      {
        id: '',
        name: 'lina food',
        description: 'prepare chicken for lina',
        category: 'chores',
        isComplete: false
      },
]
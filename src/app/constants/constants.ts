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

export const TASK_COMPLETIONS = [
  {
    id: 'taskcomp1',
    date: '20240531',
    taskid: '3JNaK6JALRlueycVwCKH'
  },
  {
    id: 'taskcomp2',
    date: '20240531',
    taskid: 'CTlnKKRvJw61vaGtJrml'
  },
  {
    id: 'taskcomp3',
    date: '20240531',
    taskid: 'Ko594uics3spnX2iyj3u'
  },
  {
    id: 'taskcomp4',
    date: '20240531',
    taskid: 'SOiF1jhTtx5VhYOSaN9q'
  },
  {
    id: 'taskcomp5',
    date: '20240531',
    taskid: 'YzFQuKWRt7eqBFjoBTYl'
  },
  {
    id: 'taskcomp6',
    date: '20240531',
    taskid: 'axsjCFmEb7Z99zfxjKW2'
  },
  {
    id: 'taskcomp7',
    date: '20240531',
    taskid: 'dyAQZ5d3Gh13PQrMdIrY'
  },
  {
    id: 'taskcomp8',
    date: '20240601',
    taskid: '3JNaK6JALRlueycVwCKH'
  },
  {
    id: 'taskcomp9',
    date: '20240601',
    taskid: 'CTlnKKRvJw61vaGtJrml'
  },
  {
    id: 'taskcomp10',
    date: '20240601',
    taskid: 'Ko594uics3spnX2iyj3u'
  },
  {
    id: 'taskcomp11',
    date: '20240601',
    taskid: 'SOiF1jhTtx5VhYOSaN9q'
  },
  {
    id: 'taskcomp12',
    date: '20240601',
    taskid: 'YzFQuKWRt7eqBFjoBTYl'
  },
  {
    id: 'taskcomp13',
    date: '20240601',
    taskid: 'axsjCFmEb7Z99zfxjKW2'
  },
  {
    id: 'taskcomp14',
    date: '20240601',
    taskid: 'dyAQZ5d3Gh13PQrMdIrY'
  },
  {
    id: 'taskcomp14',
    date: '20240604',
    taskid: 'dyAQZ5d3Gh13PQrMdIrY'
  },
  {
    id: 'taskcomp14',
    date: '20240630',
    taskid: '3JNaK6JALRlueycVwCKH'
  },
]

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
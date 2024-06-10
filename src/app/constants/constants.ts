import { Task } from "../models/task";

export const FLASH_CARDS = [
  { id: "fs1", front: "Baby", back: "Bebé" },
  { id: "fs2", front: "Newborn", back: "Recién nacido" },
  { id: "fs3", front: "Infant", back: "Niño pequeño" },
  { id: "fs4", front: "Toddler", back: "Niño pequeño" },
  { id: "fs5", front: "Crib", back: "Cuna" },
  { id: "fs6", front: "Stroller", back: "Carreola" },
  { id: "fs7", front: "Bottle", back: "Biberón o Botella" },
  { id: "fs8", front: "Pacifier", back: "Chupete o Chupon" },
  { id: "fs9", front: "Diaper", back: "Pañal" },
  { id: "fs10", front: "Onesie", back: "Mameluco" },
  { id: "fs11", front: "Lullaby", back: "Canción de cuna" },
  { id: "fs12", front: "Nurse", back: "Enfermera" },
  { id: "fs13", front: "Swaddle", back: "Envolver" },
  { id: "fs14", front: "Rattle", back: "Sonajero" },
  { id: "fs15", front: "Formula", back: "Fórmula" },
  { id: "fs16", front: "Highchair", back: "Silla de bebé" },
  { id: "fs17", front: "Blanket", back: "Cobijita" },
  { id: "fs18", front: "Playpen", back: "Corralito" },
  { id: "fs19", front: "Teething", back: "Dentición" },
  { id: "fs20", front: "Burp", back: "Eructar" },
  { id: "fs21", front: "Bib", back: "Babero" },
  { id: "fs22", front: "Cuddle", back: "Abrazo" },
  { id: "fs23", front: "Nursery", back: "Guardería" },
  { id: "fs24", front: "Car seat", back: "Asiento de coche" },
  { id: "fs25", front: "Wean", back: "Destetar" },
  { id: "fs26", front: "Pediatrician", back: "Pediatra" },
  { id: "fs27", front: "Growth spurt", back: "Estirón" },
  { id: "fs28", front: "Colic", back: "Cólico" },
  { id: "fs29", front: "Tummy time", back: "Tiempo de barriga" },
  { id: "fs30", front: "Sippy cup", back: "Vaso de aprendizaje" },
  { id: "fs31", front: "Teether", back: "Mordedor" },
  { id: "fs32", front: "Walker", back: "Andador" },
  { id: "fs33", front: "Mobility", back: "Movilidad" },
  { id: "fs34", front: "Crawl", back: "Gatear" },
  { id: "fs35", front: "Nap", back: "Siesta" },
  { id: "fs36", front: "Feeding", back: "Alimentando" },
  { id: "fs37", front: "Binky", back: "Chupete" },
  { id: "fs38", front: "Rocking chair", back: "Mecedora" }
];

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
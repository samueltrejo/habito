import { Task } from "../models/task";

export const FLASH_CARDS = [
  { id: "fs1", front: "What is C#?", back: "C# is a modern, object-oriented programming language developed by Microsoft." },
  { id: "fs2", front: "What is a namespace in C#?", back: "A namespace is a way to organize code and avoid naming conflicts. Example: namespace MyNamespace { class MyClass { } }" },
  { id: "fs3", front: "What is the entry point of a C# program?", back: "The Main method is the entry point of a C# program. Example: static void Main(string[] args) { }" },
  { id: "fs4", front: "How do you write a single-line comment in C#?", back: "Use // to write a single-line comment. Example: // This is a comment" },
  { id: "fs5", front: "How do you write a multi-line comment in C#?", back: "Use /* ... */ to write a multi-line comment. Example: /* This is a multi-line comment */" },
  { id: "fs6", front: "What is a class in C#?", back: "A class is a blueprint for creating objects. It defines properties, methods, and events. Example: class MyClass { public int MyProperty { get; set; } }" },
  { id: "fs7", front: "What is an object in C#?", back: "An object is an instance of a class. Example: MyClass obj = new MyClass();" },
  { id: "fs8", front: "What is a method in C#?", back: "A method is a function defined within a class. Example: public void MyMethod() { }" },
  { id: "fs9", front: "What is a property in C#?", back: "A property is a member that provides a flexible mechanism to read, write, or compute the value of a private field. Example: public int MyProperty { get; set; }" },
  { id: "fs10", front: "What is inheritance in C#?", back: "Inheritance is a mechanism where one class acquires the properties and behaviors of another class. Example: class BaseClass { } class DerivedClass : BaseClass { }" },
  { id: "fs11", front: "What is polymorphism in C#?", back: "Polymorphism allows methods to do different things based on the object it is acting upon. Example: public virtual void Display() { } public override void Display() { }" },
  { id: "fs12", front: "What is encapsulation in C#?", back: "Encapsulation is the concept of wrapping data and methods into a single unit. It helps to protect data from unauthorized access. Example: private int data; public int Data { get { return data; } set { data = value; } }" },
  { id: "fs13", front: "What is an interface in C#?", back: "An interface is a contract that defines a set of methods and properties without implementing them. Example: interface IMyInterface { void MyMethod(); }" },
  { id: "fs14", front: "What is an abstract class in C#?", back: "An abstract class is a class that cannot be instantiated and can contain abstract methods. Example: abstract class MyBase { public abstract void MyMethod(); }" },
  { id: "fs15", front: "What is a constructor in C#?", back: "A constructor is a special method that initializes an object. Example: public MyClass() { }" },
  { id: "fs16", front: "What is method overloading in C#?", back: "Method overloading is having multiple methods with the same name but different parameters. Example: public void MyMethod() { } public void MyMethod(int param) { }" },
  { id: "fs17", front: "What is method overriding in C#?", back: "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass. Example: public override void MyMethod() { }" },
  { id: "fs18", front: "What is a static class in C#?", back: "A static class cannot be instantiated and can only contain static members. Example: static class MyStaticClass { public static void MyMethod() { } }" },
  { id: "fs19", front: "What is a static method in C#?", back: "A static method belongs to the class rather than any object instance and can be called without creating an instance of the class. Example: public static void MyMethod() { }" },
  { id: "fs20", front: "What is an enum in C#?", back: "An enum is a distinct type that consists of a set of named constants called the enumerator list. Example: enum Days { Sunday, Monday, Tuesday }" },
  { id: "fs21", front: "What is a struct in C#?", back: "A struct is a value type that can contain data and methods. Example: struct MyStruct { public int MyField; public void MyMethod() { } }" },
  { id: "fs22", front: "What is the difference between a class and a struct in C#?", back: "A class is a reference type, while a struct is a value type. Classes support inheritance, but structs do not." },
  { id: "fs23", front: "What is the purpose of the 'using' statement in C#?", back: "The 'using' statement simplifies access to namespaces and ensures that resources are disposed of properly. Example: using System; using (var resource = new Resource()) { }" },
  { id: "fs24", front: "What is a delegate in C#?", back: "A delegate is a type that represents references to methods with a specific parameter list and return type. Example: public delegate void MyDelegate(string message);" },
  { id: "fs25", front: "What is an event in C#?", back: "An event is a message sent by an object to signal the occurrence of an action. Example: public event EventHandler MyEvent;" },
  { id: "fs26", front: "What is the difference between 'ref' and 'out' parameters in C#?", back: "'ref' requires that the parameter be initialized before it is passed, while 'out' does not. Both allow the method to modify the argument's value. Example: void MyMethod(ref int x) { } void MyMethod(out int x) { x = 10; }" },
  { id: "fs27", front: "What is a nullable type in C#?", back: "A nullable type can represent all the values of its underlying type plus an additional null value. Example: int? nullableInt = null;" },
  { id: "fs28", front: "What is the purpose of the 'is' keyword in C#?", back: "The 'is' keyword checks if an object is compatible with a specific type. Example: if (obj is MyClass) { }" },
  { id: "fs29", front: "What is the purpose of the 'as' keyword in C#?", back: "The 'as' keyword performs conversions between compatible reference types. Example: MyClass obj = otherObj as MyClass;" },
  { id: "fs30", front: "What is exception handling in C#?", back: "Exception handling is a way to handle runtime errors using try, catch, and finally blocks. Example: try { } catch (Exception ex) { } finally { }" },
  { id: "fs31", front: "What is the purpose of the 'finally' block in C#?", back: "The 'finally' block is used to execute code that needs to run regardless of whether an exception was thrown. Example: try { } catch (Exception ex) { } finally { }" },
  { id: "fs32", front: "What is a try-catch block in C#?", back: "A try-catch block is used to handle exceptions. Example: try { } catch (Exception ex) { }" },
  { id: "fs33", front: "What is the 'throw' keyword in C#?", back: "The 'throw' keyword is used to signal the occurrence of an exception. Example: throw new Exception(\"Error\");" },
  { id: "fs34", front: "What is the difference between 'throw' and 'throw ex'?", back: "'throw' preserves the original stack trace, while 'throw ex' resets the stack trace. It's better to use 'throw' to keep the original context." },
  { id: "fs35", front: "What is LINQ in C#?", back: "LINQ (Language-Integrated Query) is a set of methods for querying collections. Example: var result = from item in collection where item > 5 select item;" },
  { id: "fs36", front: "What is an anonymous type in C#?", back: "An anonymous type provides a way to create a new type without defining it explicitly. Example: var obj = new { Name = \"John\", Age = 30 };" },
  { id: "fs37", front: "What is a lambda expression in C#?", back: "A lambda expression is a concise way to represent anonymous methods using the => syntax. Example: (x, y) => x + y" },
  { id: "fs38", front: "What is a generic type in C#?", back: "A generic type allows you to define a class or method with a placeholder for the type. Example: class MyGeneric<T> { }" },
  { id: "fs39", front: "What is a collection in C#?", back: "A collection is a class used to group related objects. Example: List<int> myList = new List<int>();" },
  { id: "fs40", front: "What is the difference between an Array and a List in C#?", back: "An Array has a fixed size, while a List can grow dynamically. Example: int[] myArray = new int[5]; List<int> myList = new List<int>();" },
  { id: "fs41", front: "What is an extension method in C#?", back: "An extension method allows you to add methods to existing types without modifying them. Example: public static class MyExtensions { public static void MyMethod(this MyClass obj) { } }" },
  { id: "fs42", front: "What is the purpose of the 'var' keyword in C#?", back: "The 'var' keyword allows the compiler to infer the type of a variable. Example: var name = \"John\";" },
  { id: "fs43", front: "What is the difference between 'const' and 'readonly' in C#?", back: "'const' is a compile-time constant, while 'readonly' is a runtime constant. Example: const int myConst = 5; readonly int myReadonly = 5;" },
  { id: "fs44", front: "What is async and await in C#?", back: "async and await are used for asynchronous programming. Example: async Task MyMethod() { await Task.Delay(1000); }" },
  { id: "fs45", front: "What is the difference between Task and Thread in C#?", back: "Task represents an asynchronous operation, while Thread represents a separate execution path. Tasks are generally more efficient and easier to manage." },
  { id: "fs46", front: "What is a singleton class in C#?", back: "A singleton class ensures that only one instance of the class exists. Example: public class Singleton { private static Singleton instance; private Singleton() { } public static Singleton Instance { get { if (instance == null) { instance = new Singleton(); } return instance; } } }" },
  { id: "fs47", front: "What is a delegate in C#?", back: "A delegate is a type that represents references to methods. Example: public delegate void MyDelegate(string message);" },
  { id: "fs48", front: "What is the difference between 'public', 'private', and 'protected' access modifiers?", back: "'public' allows access from anywhere, 'private' restricts access to within the class, and 'protected' allows access within the class and derived classes." },
  { id: "fs49", front: "What is the difference between '== operator' and 'Equals method' in C#?", back: "'==' compares object references, while 'Equals' compares object values. Example: string a = \"hello\"; string b = new string(\"hello\".ToCharArray()); Console.WriteLine(a == b); // True Console.WriteLine(a.Equals(b)); // True" },
  { id: "fs50", front: "What is a partial class in C#?", back: "A partial class allows a class definition to be split across multiple files. Example: partial class MyClass { }" },

  { id: "fs51", front: "Baby", back: "Bebé" },
  { id: "fs52", front: "Newborn", back: "Recién nacido" },
  { id: "fs53", front: "Crib", back: "Cuna" },
  { id: "fs54", front: "Stroller", back: "Carreola" },
  { id: "fs55", front: "Bottle", back: "Biberón o Botella" },
  { id: "fs56", front: "Pacifier", back: "Chupon" },
  { id: "fs57", front: "Diaper", back: "Pañal" },
  { id: "fs58", front: "Onesie", back: "Mameluco" },
  { id: "fs59", front: "Lullaby", back: "Canción de cuna" },
  { id: "fs60", front: "Nurse", back: "Enfermera" },
  { id: "fs61", front: "Swaddle", back: "Envolver" },
  { id: "fs62", front: "Rattle", back: "Sonajero" },
  { id: "fs63", front: "Highchair", back: "Silla de bebé" },
  { id: "fs64", front: "Blanket", back: "Cobijita" },
  { id: "fs65", front: "Playpen", back: "Corralito" },
  { id: "fs66", front: "Burp", back: "Eructar" },
  { id: "fs67", front: "Bib", back: "Babero" },
  { id: "fs68", front: "Cuddle", back: "Abrazo" },
  { id: "fs69", front: "Car seat", back: "Asiento de coche" },
  { id: "fs70", front: "Pediatrician", back: "Pediatra" },
  { id: "fs72", front: "Growth spurt", back: "Estirón" },
  { id: "fs73", front: "Teether", back: "Juguete para morder" },
  { id: "fs74", front: "Crawl", back: "Gatear" },
  { id: "fs75", front: "Nap", back: "Siesta" },
  { id: "fs76", front: "Feeding", back: "Alimentando" },
  { id: "fs77", front: "Rocking chair", back: "Mecedora" },

  { id: "fs77", front: "How far along are you?", back: "¿Cuánto tiempo tienes de embarazo?" },
  { id: "fs78", front: "Are you having a boy or a girl?", back: "¿Vas a tener un niño o una niña?" },
  { id: "fs79", front: "When is your due date?", back: "¿Cuál es tu fecha de parto?" },
  { id: "fs80", front: "Do you have any names picked out?", back: "¿Tienes algún nombre elegido?" },
  { id: "fs81", front: "How are you feeling?", back: "¿Cómo te sientes?" },
  { id: "fs82", front: "Do you need help with anything?", back: "¿Necesitas ayuda con algo?" },
  { id: "fs83", front: "Have you felt the baby kick?", back: "¿Has sentido al bebé patear?" },
  { id: "fs84", front: "Are you planning to breastfeed?", back: "¿Estás planeando amamantar?" },
  { id: "fs85", front: "Do you have a birth plan?", back: "¿Tienes un plan de parto?" },
  { id: "fs86", front: "Are you excited to meet your baby?", back: "¿Estás emocionada por conocer a tu bebé?" },
  { id: "fs87", front: "Do you have a baby registry?", back: "¿Tienes una lista de regalos para el bebé?" },
  { id: "fs88", front: "Have you started decorating the nursery?", back: "¿Has comenzado a decorar la habitación del bebé?" },
  { id: "fs89", front: "Are you experiencing any cravings?", back: "¿Estás teniendo antojos?" },
  { id: "fs90", front: "How many weeks pregnant are you?", back: "¿De cuántas semanas estás embarazada?" },
  { id: "fs91", front: "Are you taking prenatal vitamins?", back: "¿Estás tomando vitaminas prenatales?" },
  { id: "fs92", front: "Is this your first baby?", back: "¿Es tu primer bebé?" },
  { id: "fs93", front: "Do you know the baby's gender?", back: "¿Sabes el género del bebé?" },
  { id: "fs94", front: "Are you feeling any morning sickness?", back: "¿Tienes náuseas matutinas?" },
  { id: "fs95", front: "Have you had any ultrasounds?", back: "¿Te han hecho ecografías?" },
  { id: "fs96", front: "Are you experiencing any back pain?", back: "¿Tienes dolor de espalda?" },
  { id: "fs97", front: "Have you chosen a pediatrician?", back: "¿Has elegido un pediatra?" },
  { id: "fs98", front: "Are you attending any birthing classes?", back: "¿Estás asistiendo a clases de parto?" },
  { id: "fs99", front: "Are you feeling any contractions?", back: "¿Sientes contracciones?" },
  { id: "fs100", front: "Do you have a hospital bag ready?", back: "¿Tienes lista la bolsa para el hospital?" },
  { id: "fs101", front: "Are you planning to have a baby shower?", back: "¿Planeas tener un baby shower?" },
  { id: "fs102", front: "How is your appetite?", back: "¿Cómo está tu apetito?" },
  { id: "fs103", front: "Are you having any heartburn?", back: "¿Tienes acidez?" },
  { id: "fs104", front: "Have you noticed any swelling?", back: "¿Has notado hinchazón?" },
  { id: "fs105", front: "Are you sleeping well?", back: "¿Estás durmiendo bien?" },
  { id: "fs106", front: "Have you packed your hospital bag?", back: "¿Has empacado tu bolsa para el hospital?" },
  { id: "fs107", front: "Have you felt any Braxton Hicks contractions?", back: "¿Has sentido contracciones de Braxton Hicks?" },
  { id: "fs108", front: "Are you prepared for labor?", back: "¿Estás preparada para el parto?" },
  { id: "fs109", front: "Do you need a ride to the hospital?", back: "¿Necesitas un transporte al hospital?" },
  { id: "fs110", front: "Are you planning to have a natural birth?", back: "¿Planeas tener un parto natural?" },
  { id: "fs111", front: "Have you chosen a name for the baby?", back: "¿Has elegido un nombre para el bebé?" },
  { id: "fs112", front: "Do you have a support system?", back: "¿Tienes un sistema de apoyo?" },
  { id: "fs113", front: "Are you reading any pregnancy books?", back: "¿Estás leyendo libros sobre el embarazo?" },
  { id: "fs114", front: "Have you bought any baby clothes?", back: "¿Has comprado ropa para el bebé?" },
  { id: "fs115", front: "Do you have a midwife?", back: "¿Tienes una partera?" },
  { id: "fs116", front: "Are you planning to use a doula?", back: "¿Planeas usar una doula?" },
  { id: "fs117", front: "Are you prepared for sleepless nights?", back: "¿Estás preparada para noches sin dormir?" },
  { id: "fs118", front: "Have you set up the crib?", back: "¿Has armado la cuna?" },
  { id: "fs119", front: "Do you have a birth plan?", back: "¿Tienes un plan de parto?" },
  { id: "fs120", front: "How is your energy level?", back: "¿Cómo está tu nivel de energía?" },
  { id: "fs121", front: "Have you been feeling emotional?", back: "¿Te has sentido emocional?" },
  { id: "fs122", front: "Are you experiencing any dizziness?", back: "¿Estás experimentando mareos?" },
  { id: "fs123", front: "Have you taken a childbirth class?", back: "¿Has tomado una clase de parto?" },
  { id: "fs124", front: "Do you have a baby monitor?", back: "¿Tienes un monitor para bebés?" },
  { id: "fs125", front: "Are you feeling anxious about labor?", back: "¿Te sientes ansiosa por el parto?" },
  { id: "fs126", front: "Are you planning to use pain relief during labor?", back: "¿Planeas usar analgesia durante el parto?" }
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
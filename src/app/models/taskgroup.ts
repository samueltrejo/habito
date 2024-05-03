import { Task } from "./task";

export interface TaskGroup {
    category: string;
    tasks: Task[];
}
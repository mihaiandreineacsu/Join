export class Task {
    title: string;
    description: string;
    category: string;
    assignedTo: string;
    dueDate: number;
    prio: string;
    subtask: string;

    constructor(obj?: any) {
        // this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.category = obj ? obj.category : '';
        this.assignedTo = obj ? obj.assignedTo : '';
        this.dueDate = obj ? obj.dueDate : '';
        this.prio = obj ? obj.prio : '';
        this.subtask = obj ? obj.subtask : '';
    }
}
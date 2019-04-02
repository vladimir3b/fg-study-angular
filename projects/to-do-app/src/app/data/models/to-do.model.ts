export interface IToDoModel {
  id: number;
  text: string;
  completed: boolean;
}

export class ToDo implements IToDoModel {
  id: number;
  completed: boolean;

  constructor(public text: string) {
    this.text = text.charAt(0).toUpperCase() + text.slice(1);
    this.completed = false;
    this.id = Math.random();
  }
}

type priorityType = 1 | 2 | 3 | 4 | 5;

interface ITaskModel {
  id: string;
  title: string;
  completed: boolean;
  start?: Date;
  end?: Date;
  priority?: priorityType;
}

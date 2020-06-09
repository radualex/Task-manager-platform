export class Card {
  task: string;
  date: moment.Moment;
  type: string;
  status: string;
  logo: any;
  name: string;
  editMode: boolean;

  constructor(
    task: string,
    date: moment.Moment,
    type: string,
    status: string,
    logo: any,
    name: string,
    editMode: boolean
  ) {
    this.task = task;
    this.date = date;
    this.type = type;
    this.status = status;
    this.logo = logo;
    this.name = name;
    this.editMode = editMode;
  }

  getDateAsInt(): number {
    return Number.parseInt(this.date.format("DD"));
  }
}

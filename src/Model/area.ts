export class Area {
  date: moment.Moment;
  deals: number;

  constructor(date: moment.Moment, deals: number) {
    this.date = date;
    this.deals = deals;
  }

  getDateAsString(): string {
    const day = Number.parseInt(this.date.format("DD"));
    const month = this.date.format("MMM");
    return `${day} ${month}`;
  }
}

export default class Reminder {
  id: number;
  isCompolete: boolean;
  constructor(public title: string) {
    this.id = Date.now();
    this.isCompolete = false;
  }
}

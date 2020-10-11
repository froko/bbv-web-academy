export class Time {
  id: number;
  date: string;
  amount: number;
  project: string;
  costType: string;
  comment: string;

  fromValues(id: number, date: string, project: string, costType: string, amount: number, comment: string) {
    this.id = id;
    this.date = date;
    this.project = project;
    this.costType = costType;
    this.amount = amount;
    this.comment = comment;

    return this;
  }
}

export interface CostType {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  enabled: boolean;
  name: string;
  costTypes: CostType[];
}

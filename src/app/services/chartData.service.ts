import { Injectable } from "@angular/core";
import { ChartInterface } from "../models/chart.model";

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  public getChartDate(data: ChartInterface): { labels: string[], values: number[] } {
    const values = [];
    const labels = [];
    data.values.forEach((item: string) => {
      const idx = labels.findIndex(label => label === item);
      if (idx !== -1) {
        values[idx] = values[idx] + 1;
      } else {
        labels.push(item);
        values.push(1);
      }
    })

    return { labels, values }

  }

}

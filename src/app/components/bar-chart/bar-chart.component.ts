import { Component, Input } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import { ChartInterface } from "../../models/chart.model";
import { ChartDataService } from "../../services/chartData.service";

@Component({
  selector: 'bar-chart',
  templateUrl: 'bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  @Input('data') data: ChartInterface;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [];

  constructor(private chartService: ChartDataService) {}

  ngOnInit(): void {

    const chartValues = this.chartService.getChartDate(this.data)

    this.barChartLabels = chartValues.labels;
    this.barChartData.push({
      data: chartValues.values,
      label: this.data.name
    })
  }
}

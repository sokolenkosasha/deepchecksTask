import { Component, Input, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ChartInterface } from "../../models/chart.model";
import { ChartDataService } from "../../services/chartData.service";

@Component({
  selector: 'distribution-plot',
  templateUrl: './distribution-plot.component.html',
  styleUrls: ['./distribution-plot.component.scss']
})
export class DistributionPlotComponent implements OnInit{

  @Input('data') data: ChartInterface;

  public lineChartData: ChartDataSets [] = [];
  public lineChartLabels: Label[] = []
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private chartService: ChartDataService) {}

  ngOnInit() {

    const chartData = this.chartService.getChartDate(this.data);

    this.lineChartLabels = chartData.labels;
    this.lineChartData.push({
      data: chartData.values,
      label: this.data.name
    });
  }

}

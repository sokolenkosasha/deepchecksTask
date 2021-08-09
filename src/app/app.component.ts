import { Component } from '@angular/core';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import { FormControl } from "@angular/forms";
import { ChartInterface } from "./models/chart.model";
import { take } from "rxjs/operators";
import { CSVParserResultModel } from "./models/csvParserResult.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';

  public data: CSVParserResultModel[];
  public columns: string[] = [];
  public barChartColumns: ChartInterface[] = [];
  public distributionPlotColumns: ChartInterface[] = [];
  public columnsInForm = new FormControl();

  constructor(private csvParser: NgxCsvParser) { }

  public onFileUpload(event: any): void {
    this.resetData();
    const uploadedFile = event.target.files[0];
    this.csvParser
      .parse(uploadedFile, { header: true, delimiter: ',' })
      .pipe(take(1))
      .subscribe((result: CSVParserResultModel[]) => {
        this.data = result;
        this.columns = Object.keys(this.data[0]);
      }, (error: NgxCSVParserError) => {
        console.log('err', error);
    });
  }

  public showCharts(selectedColumns: string[]): void {

    this.barChartColumns = [];
    this.distributionPlotColumns = [];

    selectedColumns.forEach(columnName => {
      const chartData: ChartInterface = {
        name: columnName,
        values: this.data.map((row: any) => row[columnName])
      };

      if (parseInt(chartData.values[0])) {
        this.distributionPlotColumns.push(chartData);
      } else {
        this.barChartColumns.push(chartData);
      }
    })
  }

  private resetData() : void {
    this.barChartColumns = [];
    this.distributionPlotColumns = [];
    this.columns = [];
  }
}

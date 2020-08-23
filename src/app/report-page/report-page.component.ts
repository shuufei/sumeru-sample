import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

const ACTIVE_BAR_BACKGROUND_COLOR = 'rgba(255, 99, 132, 1)';
const DEACTIVE_BAR_BACKGROUND_COLOR = 'rgba(255, 99, 132, 0.3)';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart') chartEl: ElementRef;

  private chart?: Chart;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const context = this.chartEl.nativeElement;
    this.chart = new Chart(context, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  ACTIVE_BAR_BACKGROUND_COLOR,
                  ACTIVE_BAR_BACKGROUND_COLOR,
                  ACTIVE_BAR_BACKGROUND_COLOR,
                  ACTIVE_BAR_BACKGROUND_COLOR,
                  ACTIVE_BAR_BACKGROUND_COLOR,
                  ACTIVE_BAR_BACKGROUND_COLOR,
              ],
              borderWidth: 1
          }]
      },
      options: {
        events: ['click'],
        onClick: (event) => {
          this.updateBackgroundColorByClickEvent(event);
        }
      }
    });
  }

  private updateBackgroundColorByClickEvent(event: MouseEvent): void {
    const activePoints = this.chart.getElementsAtEvent(event);
    const datasetIndex = (activePoints[0] as any)._datasetIndex;
    const dataIndex = (activePoints[0] as any)._index;
    (this.chart.data.datasets[0].backgroundColor as string[]).forEach((v, i) => {
      if (i !== dataIndex) {
        this.chart.data.datasets[datasetIndex].backgroundColor[i] = DEACTIVE_BAR_BACKGROUND_COLOR;
      } else {
        this.chart.data.datasets[datasetIndex].backgroundColor[i] = ACTIVE_BAR_BACKGROUND_COLOR;
      }
    });
    this.chart.update();
  }

}

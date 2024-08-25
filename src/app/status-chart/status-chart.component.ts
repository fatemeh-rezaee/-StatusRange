import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';
import moment from 'jalali-moment';

@Component({
  selector: 'app-status-chart',
  templateUrl: './status-chart.component.html',
  styleUrls: ['./status-chart.component.css'],
})
export class StatusChartComponent implements OnInit {
  chartOptions: any = {
    chart: {
      id: 'offline-online-chart',
      type: 'bar',
    },
    xaxis: {
      categories: [],
      title: {
        text: 'تاریخ (شمسی)',
      },
    },
    yaxis: [
      {
        title: {
          text: 'آنلاین بودن',
        },
      },
      {
        opposite: true,
        title: {
          text: 'آفلاین بودن',
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  chartSeries: any[] = [];

  constructor(private chartDataService: ChartDataService) {}

  ngOnInit() {
    this.chartDataService.data$.subscribe((data) => {
      this.updateChart(data);
    });
  }

  updateChart(data: any[]) {
    // تبدیل تاریخ‌ها به شمسی
    const categories = data.map((d) =>
      moment(d.startDate).locale('fa').format('jYYYY/jMM/jDD')
    );

    const onlineData = data.map((d) => d.online);
    const offlineData = data.map((d) => d.offline);

    this.chartOptions.xaxis.categories = categories;
    this.chartSeries = [
      {
        name: 'آنلاین بودن',
        data: onlineData,
      },
      {
        name: 'آفلاین بودن',
        data: offlineData,
      },
    ];
  }
}

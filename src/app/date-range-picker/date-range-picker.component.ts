import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DatePickerComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private http: HttpClient,
    private chartDataService: ChartDataService
  ) {}

  generateReport() {
    this.fetchReport();
  }

  // fetchReport() {
  //   const start = this.startDate?.toISOString() || '';
  //   const end = this.endDate?.toISOString() || '';

  //   this.http.post<any[]>('/api/getOfflineList', { startDate: start, endDate: end })
  //     .subscribe(data => {
  //       this.chartDataService.setData(data);
  //     });
  // }

  fetchReport() {
    // داده‌های شبیه‌سازی شده
    const offlineList = [
      { startDate: '2024-08-01T00:00:00Z', endDate: '2024-08-02T00:00:00Z', online: 50, offline: 30 },
      { startDate: '2024-08-02T00:00:00Z', endDate: '2024-08-03T00:00:00Z', online: 60, offline: 40 },
      { startDate: '2024-08-03T00:00:00Z', endDate: '2024-08-04T00:00:00Z', online: 55, offline: 45 },
      { startDate: '2024-08-04T00:00:00Z', endDate: '2024-08-05T00:00:00Z', online: 70, offline: 30 },
      { startDate: '2024-08-05T00:00:00Z', endDate: '2024-08-06T00:00:00Z', online: 65, offline: 35 }
    ];

    this.chartDataService.setData(offlineList);
  }
}

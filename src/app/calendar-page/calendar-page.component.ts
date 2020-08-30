import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import jaLocale from '@fullcalendar/core/locales/ja';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { WeekRangeSelectionStrategy } from './week-range-selection-strategy';
import {DateAdapter, NativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: WeekRangeSelectionStrategy
    },
  ]
})
export class CalendarPageComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;


  range = this.fb.group({
    start: [],
    end: []
  });

  calendarOption: CalendarOptions = {
    initialView: 'timeGridWeek',
    allDaySlot: false,
    nowIndicator: true,
    headerToolbar: false,
    locale: jaLocale
  };

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<NativeDateAdapter>
  ) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('ja');
    this.range.valueChanges.subscribe(range => {
      this.changeCalendarDateRange(range.start);
    });
  }

  ngAfterViewInit(): void {
    const api = this.calendarComponent.getApi();
    api.on('eventClick', (event) => {
      console.log('---- clicked event: ', event.event.id);
    });
  }

  addTestEvent(): void {
    const api = this.calendarComponent.getApi();
    api.addEvent({
      id: '1234',
      title: 'LiveAAA',
      start: '2020-08-31T09:00:00Z',
      end: '2020-08-31T13:00:00Z',
      backgroundColor: '#202020',
      color: '#ffffff',
    });
  }

  gotoToday(): void {
    const api = this.calendarComponent.getApi();
    api.today();
  }

  private changeCalendarDateRange(date: Date): void {
    const api = this.calendarComponent.getApi();
    api.gotoDate(date);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PeopleService } from "./services/people.service";
import { SelectItem } from 'primeng/api';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

type Item = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
};

type ListItem = {
  label: string;
  value: number;
};

type CalendarHeader = {
  label: string;
  styleClass: string;
};

type CalendarBody = {
  items: ListItem[];
  day: number | undefined;
  val: ListItem | undefined;
};

type CalendarRow = {
  calendarBodyCols: CalendarBody[];
};

type CalendarData = {
  calendarRows: CalendarRow[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.styl',
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('dt')
  table!: Table;

  title = 'frontapp';

  headers: String[] = [
    "name",
    "age",
    "title",
    "hoge"
  ];

  cellHolidayItem: ListItem[];

  cellItem: ListItem[];

  calendarHeaderCols: CalendarHeader[] = [
    {label: "日", styleClass: "col-sun"},
    {label: "月", styleClass: "col-weekday"},
    {label: "火", styleClass: "col-weekday"},
    {label: "水", styleClass: "col-weekday"},
    {label: "木", styleClass: "col-weekday"},
    {label: "金", styleClass: "col-weekday"},
    {label: "土", styleClass: "col-sat"}
  ];


  calendarData: CalendarData = {calendarRows: []};

  cols: Item[] = [];

  //selectedItem: ListItem | undefined = undefined;
  //selectedItem = {label: "札幌第２開発Ｃ", value: 2};
  //selectedItem: ListItem;
  selectedItem2: ListItem;

  constructor(private peopleService: PeopleService) {
    this.selectedItem2 = {label: "札幌第１開発Ｃ", value: 1};

    this.cellHolidayItem = [
      {label: "",               value: -1},
      {label: "休み",           value: 10},
      {label: "札幌第１開発Ｃ", value: 1},
      {label: "札幌第２開発Ｃ", value: 2},
      {label: "テレワーク",     value: 3},
      {label: "有休",           value: 4}
    ];

    this.cellItem = [
      {label: "",               value: -1},
      {label: "札幌第１開発Ｃ", value: 1},
      {label: "札幌第２開発Ｃ", value: 2},
      {label: "テレワーク",     value: 3},
      {label: "有休",           value: 4}
    ];

    const today = new Date();
    const cur_year = today.getFullYear();
    const cur_month = today.getMonth() + 1;
    const nDays = new Date(cur_year, cur_month, 0).getDate();
    const start_wday = new Date(cur_year, cur_month - 1, 1).getDay();

    let day: number = -1;
    for (let i = 0; i < (nDays + start_wday) / 7 + 1; ) {

      let row: CalendarRow = {calendarBodyCols: []};
      for (let j = 0; j < 7; ++j) {

        if ((i === 0) && (j < start_wday)) {
          day = -1;

        } else if ((i === 0) && (j === start_wday)) {
          day = 1;

        } else if (day === -1) {
          day = -1;

        } else {
          day++;

        }

        if (day > nDays) {
          day = -1;
        }

        if ((j === 0) || (j === 6)) {
          row.calendarBodyCols[j] = {items: this.cellHolidayItem, day: day, val: undefined}

        } else {
          row.calendarBodyCols[j] = {items: this.cellItem, day: day, val: undefined}
        }
      }

      this.calendarData.calendarRows.push(row);
      i++;
    }

    console.log(this.calendarData);
  }

  onClickListBox(event:any) {
    console.log(event);
    console.log(this.selectedItem2);
  }
  onChangeListBox(event: any, ri: number, ci: number) {
    console.log(event);
    console.log(`${ri}, ${ci}`);
    console.log(this.selectedItem2);
  }
  ngOnInit() {
    //for (let i = 0; i < 100; ++i) {
    //  this.cols.push({
    //    col1: "おとうさん",
    //    col2: "42",
    //    col3: "papa",
    //    col4: "eng",
    //  });
    //  this.cols.push({
    //    col1: "おかあさん",
    //    col2: "27",
    //    col3: "mama",
    //    col4: "hoge",
    //  });
    //  this.cols.push({
    //    col1: "おにぃちゃん",
    //    col2: "9",
    //    col3: "1st",
    //    col4: "illa",
    //  });
    //  this.cols.push({
    //    col1: "ぉとうと",
    //    col2: "7",
    //    col3: "2nd",
    //    col4: "gen",
    //  });
    //}

    //this.peopleService.sections()
    //.then((res) => {
    //  console.log(res);
    //});
  }
}

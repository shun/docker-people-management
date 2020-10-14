import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

type Item = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
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

  cols: Item[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 100; ++i) {
      this.cols.push({
        col1: "おとうさん",
        col2: "42",
        col3: "papa",
        col4: "eng",
      });
      this.cols.push({
        col1: "おかあさん",
        col2: "27",
        col3: "mama",
        col4: "hoge",
      });
      this.cols.push({
        col1: "おにぃちゃん",
        col2: "9",
        col3: "1st",
        col4: "illa",
      });
      this.cols.push({
        col1: "ぉとうと",
        col2: "7",
        col3: "2nd",
        col4: "gen",
      });
    }

    console.log(this.cols);
  }
}

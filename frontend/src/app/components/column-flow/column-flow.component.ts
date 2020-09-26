import { Component, OnInit } from '@angular/core';
import { Item, ItemList } from "./column-flow-body/column-flow-body.component";

@Component({
  selector: 'column-flow',
  templateUrl: './column-flow.component.html',
  styleUrls: ['./column-flow.component.styl']
})
export class ColumnFlowComponent implements OnInit {
  columnLayers: ItemList[];

  draggedItem: Item | null = null;
  draggedItemIndex: number = -1;

  constructor() {
    this.columnLayers = [];
  }

  ngOnInit(): void {
    const items: Item[] = [
        {id: 1, code: "001", icon: "pi-home", label: "営業部", is_group: true, is_enter: false, hover: "", selected: "", children: []},
        {id: 2, code: "002", icon: "pi-home", label: "経営部", is_group: true, is_enter: false, hover: "", selected: "", children: []},
        {id: 3, code: "003", icon: "pi-home", label: "開発部", is_group: true, is_enter: false, hover: "", selected: "", children: []},
        {id: 4, code: "004", icon: "pi-home", label: "調達部", is_group: true, is_enter: false, hover: "", selected: "", children: []},
        {id: 5, code: "005", icon: "pi-user", label: "ほげほげ 壱ろう", is_group: false, is_enter: false, hover: "", selected: "", children: []},
        {id: 6, code: "006", icon: "pi-user", label: "ほげほげ 弐ろう", is_group: false, is_enter: false, hover: "", selected: "", children: []},
        {id: 7, code: "007", icon: "pi-user", label: "ほげほげ 参ろう", is_group: false, is_enter: false, hover: "", selected: "", children: []},
        {id: 8, code: "008", icon: "pi-user", label: "ほげほげ 四ろう", is_group: false, is_enter: false, hover: "", selected: "", children: []},
      ];

    const itemlist: ItemList = {items: items};
    this.columnLayers.push(itemlist);
  }

  notifyDragStart(event: any) {
    console.log(event);
    this.draggedItem = event.item;
    this.draggedItemIndex = event.index;
  }

  notifyDragEnd() {
    console.log("notifyDragEnd");
    this.draggedItem = null;
    this.draggedItemIndex = -1;
  }

  notifySelectedItem(event: any) {
    //console.group();
    //console.log("notifySelectedItem");
    //console.log(event);
    //console.groupEnd();

    const items: Item[] = event.item.children;
    const itemlist: ItemList = {items: items};

    if (this.columnLayers.length > event.layerno + 1) {
      this.columnLayers.splice(event.layerno + 1, this.columnLayers.length - event.layerno);
    }

    this.columnLayers.push(itemlist);
  }

}

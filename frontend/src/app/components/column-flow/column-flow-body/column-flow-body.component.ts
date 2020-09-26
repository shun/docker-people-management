import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

export type Item = {
  id: number;
  code: string;
  icon: string;
  label: string;
  is_group: boolean;
  is_enter: boolean;
  hover: string;
  selected: string;
  children: Item[];
};

export type ItemList = {
  items: Item[];
};

export type EvtSelectedItem = {
  layerno: number;
  item: Item;
};

export type EvtDragStartItem = {
  index: number;
  item: Item;
};

@Component({
  selector: 'column-flow-body',
  templateUrl: './column-flow-body.component.html',
  styleUrls: [
    "../../../../../node_modules/primeicons/primeicons.css",
    "../../../../../node_modules/primeng/resources/themes/nova-light/theme.css",
    "../../../../../node_modules/primeng/resources/primeng.min.css",
    './column-flow-body.component.styl'
  ]
})
export class ColumnFlowBodyComponent implements OnInit {

  @Input("items")
  availableItems: Item[] = [];

  @Input("layerno")
  layerno: number = -1;

  @Output()
  onselectedGroupItem = new EventEmitter<EvtSelectedItem>();

  @Output()
  ondragStart = new EventEmitter<EvtDragStartItem>();

  @Output()
  ondragEnd = new EventEmitter();

  selectedItems: Item[] = [];

  @Input("draggedItem")
  draggedItem: Item | null = null;

  @Input("draggedItemIndex")
  draggedItemIndex: number = -1;

  constructor() {
    this.selectedItems = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.availableItems.sort((a: Item, b: Item) => {
      if (
          ((a.is_group) && (b.is_group)) ||
          ((!a.is_group) && (!b.is_group))
      ) {
        return Number(a.code) - Number(b.code);
      }
      else if ((a.is_group) && (!b.is_group)) {
        return -1;
      }
      else if ((!a.is_group) && (b.is_group)) {
        return 1;
      }

      return 0;
    });
    console.log(this.draggedItem);
  }

  dragStart(event: any, item: Item, index: number) {
    console.log("dragStart")
    console.log(item)

    this.ondragStart.emit({index: index, item: item})
  }

  dragEnd(event: any, item: Item) {
    console.log("dragEnd")
    this.availableItems.splice(this.draggedItemIndex, 1);
    this.ondragEnd.emit()
  }

  dropColumn(event: any) {
    console.log("dropColumn");
  }

  drop(event: any, item: Item, index: number) {
    console.log("drop");
    console.log(item);
    console.log(index);
    item.hover = "";
    if (!item.is_group) {
      return;
    }

    console.log(this.draggedItem);
    if (this.draggedItem) {
      item.children.push(this.draggedItem);
    }
  }

  drag(event: any) {
    console.log("drag");
  }

  clicked(event: any, item: Item) {
    //console.log(item);
    //console.log(this.layerno);
    this.unselectedAllItem();

    if (item.is_group) {
      this.onselectedGroupItem.emit({layerno: this.layerno, item: item});
      item.selected = "cl-row-selected";
    }
  }

  unselectedAllItem(): void {
    this.availableItems.forEach((item: Item) => {
      item.selected = "";
    });
  }

  dragEnter(event: any, item: Item) {
    //console.log("dragEnter");
    //console.log(item);
    if (item.is_group) {
      item.hover = "cl-item-hover";
    }
  }

  dragLeave(event: any, item: Item) {
    //console.log("dragLeave");
    //console.log(item);
    item.hover = "";
  }

  findIndex(item: Item) {
    const idx = this.availableItems.filter((value, index) => {
      console.log(value);
      console.log(index);
      if (item.id === value.id) return index;
      return -1;
    });
    console.log(idx);
    return idx;
  }
}

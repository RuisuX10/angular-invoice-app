import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemsComponent } from '../row-items/row-items.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemsComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

  @Input() items?: Item[];

  @Output() removeEventEmiter: EventEmitter<number> = new EventEmitter();

  onRemove(id:number){
    this.removeEventEmiter.emit(id);
    console.log('list items');
  }
}

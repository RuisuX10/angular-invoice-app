import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-items.component.html'
})
export class RowItemsComponent {

  @Input() item?: Item;

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id?: number) {
    if (id !== undefined) {
      this.removeEventEmitter.emit(id);
      console.log('row-items Se emitio: ', id);
    }else{
      console.log('No hay id desde row-items');
    }
  }
}

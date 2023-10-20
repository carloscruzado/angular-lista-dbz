import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [{ name: 'Turnks', power: 10 }];

  // onDeleteId(id: string | undefined) {
  //   if (id !== undefined) {
  //     this.onDelete.emit(id);
  //   }
  // }

  onDeleteId(id?: string) {
    if (!id) {
      return;
    }
    this.onDelete.emit(id);
  }

  onDeleteCharacter(index: number): void {
    console.log(index);
  }
}

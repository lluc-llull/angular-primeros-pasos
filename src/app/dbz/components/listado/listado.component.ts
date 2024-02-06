import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css',]
})

export class ListadoComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 2000,
  }]

  // onDeleteCharacter(index: number):void {
  //  this.onDelete.emit(index);
  // }

  deleteCharacterById(id: string):void {
    this.onDelete.emit(id);
  }

}

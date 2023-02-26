import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input() text?: string;
  @Input() showDeleteIcon?: boolean;
  @Input() showEditIcon?: boolean;
  @Output() btnClick = new EventEmitter()
  delete = faTrashCan
  edit = faPencil
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {

  }

  onClick() {
    this.btnClick.emit()
  }
}

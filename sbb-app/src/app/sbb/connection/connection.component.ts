import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FlatConnection } from '../sbb.model';
@Component({
  selector: 'sbb-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  @Input() connection: FlatConnection;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter<FlatConnection>();

  onClick() {
    this.select.emit(this.connection);
  }
}

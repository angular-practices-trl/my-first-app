import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  private _serverId = 10;

  private _serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  get serverId(): number {
    return this._serverId;
  }

  set serverId(value: number) {
    this._serverId = value;
  }

  get serverStatus(): string {
    return this._serverStatus;
  }

  set serverStatus(value: string) {
    this._serverStatus = value;
  }
}

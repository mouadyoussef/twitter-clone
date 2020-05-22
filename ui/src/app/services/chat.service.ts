import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: WebSocket;
  private listener: EventEmitter<any> = new EventEmitter();

  public constructor() {
    this.socket = new WebSocket("ws://localhost:3000/ws");
    this.socket.onopen = event => {
      this.listener.emit({ type: "open", data: event });
    };
    this.socket.onclose = event => {
      this.listener.emit({ type: "close", data: event });
    };
    this.socket.onmessage = event => {
      this.listener.emit({ type: "message", data: event.data });
    };
  }

  public send(data: string) {
    this.socket.send(data);
  }

  public close() {
    this.socket.close();
  }

  public getEventListener() {
    return this.listener;
  }

  // setupSocketConnection() {
  //   this.socket = io('ws://127.0.0.1:3000/ws');
  //   this.socket.emit('message', 'Hello there from Angular.');
  //   this.socket.on('ping', function (data) {
  //     alert(1);
  //     this.socket.emit('pong', { beat: 1 });
  //   });
  // }
}

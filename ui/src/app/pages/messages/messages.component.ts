import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  host: {
    class: 'flex h-full',
  },
})
export class MessagesComponent implements OnInit {
  public messages = [];
  public message: string;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getEventListener().subscribe((event) => {
      if (event.type === 'message') this.messages.push(event.data);
    });
  }

  sendMessage() {
    this.chatService.send(this.message);
    this.message = '';
  }

  onMessageKeyUp($event: any) {
    this.message = $event.target.value;
    if ($event.keyCode === 13) {
      this.sendMessage();
    }
  }
}

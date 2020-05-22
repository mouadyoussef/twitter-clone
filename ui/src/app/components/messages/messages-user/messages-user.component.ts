import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages-user',
  templateUrl: './messages-user.component.html',
  styleUrls: ['./messages-user.component.css']
})
export class MessagesUserComponent implements OnInit {

  @Input() public img;
  constructor() { }

  ngOnInit(): void {
  }

}

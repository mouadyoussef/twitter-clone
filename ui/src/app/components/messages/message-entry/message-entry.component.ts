import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styleUrls: ['./message-entry.component.css'],
})
export class MessageEntryComponent implements OnInit {

  @Input() public message;

  constructor() { }

  ngOnInit(): void {
  }

}

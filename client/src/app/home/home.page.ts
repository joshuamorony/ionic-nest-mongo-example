import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private messages: MessagesService){

  }

  ngOnInit(){

    let testMessage = {
      content: 'Hello!',
      submittedBy: 'Josh'
    };

    let testId = '5c04b73880159ab69b1e29a9'

    // Create a test message
    this.messages.createMessage(testMessage).subscribe((res) => {
      console.log("Create message: ", res);
    });

    // Retrieve all messages
    this.messages.getMessages().subscribe((res) => {
      console.log("All messages: ", res);
    });

    // Retrieve one specific message
    this.messages.getMessage(testId).subscribe((res) => {
      console.log("Specific message: ", res);
    });

  }

}
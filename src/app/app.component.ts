import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'join';
  summeryActive = false;
  boardActive = false;
  addTaskActive = false;
  contactsActive = false;
  legalNoticeActive = false;


  activateSummery() {
    this.boardActive = false;
    this.addTaskActive = false;
    this.contactsActive = false;
    this.legalNoticeActive = false;
    this.summeryActive = true;
  }

  activateBoard() {
    this.boardActive = true;
    this.addTaskActive = false;
    this.contactsActive = false;
    this.legalNoticeActive = false;
    this.summeryActive = false;
  }

  activateAddTask() {
    this.boardActive = false;
    this.addTaskActive = true;
    this.contactsActive = false;
    this.legalNoticeActive = false;
    this.summeryActive = false;
  }

  activateContacts() {
    this.boardActive = false;
    this.addTaskActive = false;
    this.contactsActive = true;
    this.legalNoticeActive = false;
    this.summeryActive = false;
  }

  activateLegalNotice() {
    this.boardActive = false;
    this.addTaskActive = false;
    this.contactsActive = false;
    this.legalNoticeActive = true;
    this.summeryActive = false;
  }
}

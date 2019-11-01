import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../messageService';
import { Subscription } from 'rxjs';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnDestroy, OnInit {
  userName: string;
  flag: boolean;
  messages: any[] = [];
  subscription: Subscription;
  angFormGrp: FormGroup;
  userNameModel: string;
  tabIndexStatus = 0;
  template: Object = {
    name: '',
    email: '',
    radioBtn: ''
  };

  constructor(private messageService: MessageService, private fb: FormBuilder, private router: Router) {
    // subscribe to content component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

    // create form
    this.createForm();
  }

  ngOnInit() {
  }

  public displayName(flag: boolean) {
    this.flag = flag;
    this.userName = this.flag ? 'Boy': 'Girl';
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from content Component to App Component!');
 }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
}

createForm() {
  this.angFormGrp = this.fb.group({
     name: ['', Validators.required ],
     email: ['', Validators.required],
     radioBtn: ['false', Validators.required]
  });
}

onReactiveBtnSubmit(reactiveFormSubmit: boolean) {
  if(reactiveFormSubmit) 
  this.messageService.changeDisplayImageStatus(this.angFormGrp.controls['radioBtn'].value);
  else 
  this.messageService.changeDisplayImageStatus(this.template['radioBtn']);
  
  this.router.navigate(['bind']);
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

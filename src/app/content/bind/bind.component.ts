import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../messageService';

@Component({
  selector: 'bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscription: Subscription;
  responseData: any;
  imgDisplayOption: boolean;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
   this.responseData = '';
   this.messageService.getConfig().subscribe((data: any[])=>{
     this.responseData = data;
   });
  this.imgDisplayOption = this.messageService.getDisplayImageStatus();
  }

  ngOnDestroy(){
   this.messageService.changeDisplayImageStatus(false);
  }
}

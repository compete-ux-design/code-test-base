import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BindComponent } from './bind.component';

@NgModule({
  declarations: [
    BindComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BindComponent],
  providers: [],
  bootstrap: []
})
export class BindModule { }
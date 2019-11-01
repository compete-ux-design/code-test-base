import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [TabsComponent],
  exports:[TabsComponent],
  imports: [
    CommonModule, MatTabsModule, ReactiveFormsModule,
    FormsModule
  ]
})
export class TabsModule { }

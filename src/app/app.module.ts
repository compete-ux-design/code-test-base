import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BindModule } from './content/bind/bind.module';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from './content/tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    BindModule,
    HttpClientModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

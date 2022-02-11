import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyappComponent } from './components/myapp/myapp.component';
import { StaticComponent } from './components/myapp/static/static.component';
import { MessagesComponent } from './components/myapp/dinamic/messages/messages.component';
import { ContactsComponent } from './components/myapp/dinamic/contacts/contacts.component';
import { PreferencesComponent } from './components/myapp/dinamic/preferences/preferences.component';
import { MessListComponent } from './components/myapp/dinamic/messages/mess-list/mess-list.component';
import { MessDetailComponent } from './components/myapp/dinamic/messages/mess-detail/mess-detail.component';
import { BreakLinePipe } from './services/pipe/break-line.pipe';
import { LimitStringPipe } from './services/pipe/limit-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyappComponent,
    StaticComponent,
    MessagesComponent,
    ContactsComponent,
    PreferencesComponent,
    MessListComponent,
    MessDetailComponent,
    BreakLinePipe,
    LimitStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

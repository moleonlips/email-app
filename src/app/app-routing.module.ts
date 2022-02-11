import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactsComponent } from './components/myapp/dinamic/contacts/contacts.component';
import { MessDetailComponent } from './components/myapp/dinamic/messages/mess-detail/mess-detail.component';
import { MessListComponent } from './components/myapp/dinamic/messages/mess-list/mess-list.component';
import { MessagesComponent } from './components/myapp/dinamic/messages/messages.component';
import { PreferencesComponent } from './components/myapp/dinamic/preferences/preferences.component';
import { MyappComponent } from './components/myapp/myapp.component';



const routes: Routes = [
  { 
    path: 'login', component: LoginComponent 
  },

  {
    path: 'myapp', component: MyappComponent, 
    children: [
      { 
        path: 'messages', component: MessagesComponent,
        children: [
          {
            path: ':param', component: MessListComponent,
            children: [{ path: ':param', component: MessDetailComponent }]
          },
        ]
      },

      { path: 'contacts', component: ContactsComponent },

      { path: 'preferences', component: PreferencesComponent },

      { path: '', redirectTo: 'messages', pathMatch: 'full', }
    ]
  },

  { 
    path: '', redirectTo: 'login', pathMatch: 'full', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

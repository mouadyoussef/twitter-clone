import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MessagesUserComponent } from './components/messages/messages-user/messages-user.component';
import { MessageEntryComponent } from './components/messages/message-entry/message-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    HomeComponent,
    NotificationsComponent,
    MessagesComponent,
    SearchBoxComponent,
    MessagesUserComponent,
    MessageEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

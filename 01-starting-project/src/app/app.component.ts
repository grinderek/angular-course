import { Component, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(id: string) {
    console.log('User selected:', id);
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}

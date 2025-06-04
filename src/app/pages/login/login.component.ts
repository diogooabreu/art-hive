import { NotificationsService } from './../../services/notifications-service.service';
import { UserService } from './../../services/user-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private notification: NotificationsService
  ) { }

  handleSubmit() {
    if (!this.email || !this.password) {
      this.notification.info("Please fill in all fields before continuing.", "Attention");
    } else {
      this.userService.login(this.email, this.password).subscribe(user => {
        if (user) {
          this.notification.succes("Login successful", "Wellcome back");
          this.router.navigate(['/home']);
        } else {
          this.notification.error('Invalid email or password, please try again', "Error");
        }
      });
    }
  }

  handleNavigate() {
    this.router.navigate(['/auth/signUp']);
  }
}

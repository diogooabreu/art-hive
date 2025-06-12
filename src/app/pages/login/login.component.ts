import { NotificationsService } from './../../services/notifications-service.service';
import { UserService } from './../../services/user-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule
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
          localStorage.setItem('user', JSON.stringify(user));
          this.notification.succes("Login successful", "Wellcome back");
          this.router.navigate(['/home']);
        } else {
          this.notification.error('Invalid email or password, please try again', "Error");
        }
      });
    }
  }

  get isFormInvalid(): boolean {
    return !this.email || !this.password;
  }

  handleNavigate() {
    this.router.navigate(['/auth/signUp']);
  }
}

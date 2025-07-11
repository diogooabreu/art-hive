import { Component } from '@angular/core';
import User from '../../Model/user';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationsService } from '../../services/notifications-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'sign-up',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email = '';
  name = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private notification: NotificationsService
  ) { }

  handleSignUp() {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    if (!passwordRegex.test(this.password)) {
      this.notification.error("The password must contain letters and numbers.");
      return;
    }

    const newUser = new User(this.name, this.email, this.password);
    newUser.name = this.name;

    this.userService.createUser(newUser).subscribe(() => {
      localStorage.setItem('user', JSON.stringify('user'));
      this.notification.succes("Wellcome! ^^", "Hello");
      this.router.navigate(['home'])
    })
  }

  get isFormInvalid(): boolean {
    return !this.email || !this.password;
  }

  handleNavigate() {
    this.router.navigate(['/auth/login']);
  }
}

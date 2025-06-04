import { Component } from '@angular/core';
import User from '../../Model/user';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationsService } from '../../services/notifications-service.service';
@Component({
  selector: 'sign-up',
  imports: [
    FormsModule
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!this.email || !this.password) {
      this.notification.info("Please fill in all fields before continuing.", "Attention");
      return;
    }

    if (!passwordRegex.test(this.password)) {
      this.notification.error("The password must contain at least 8 characters, with at least one uppercase letter, one lowercase letter, one number and one symbol.");
      return;
    }

    const newUser = new User(this.name, this.email, this.password);
    newUser.name = this.name;

    this.userService.createUser(newUser).subscribe(() => {
      this.notification.succes("Wellcome! ^^", "Hello");
      this.router.navigate(['home'])
    })
  }

  handleNavigate() {
    this.router.navigate(['/auth/login']);
  }
}

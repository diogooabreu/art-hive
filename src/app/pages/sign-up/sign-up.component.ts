import { Component } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  handleSubmit() { }

  handleNavigate() {
    this.router.navigate(['/auth/login']);
  }
}

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
    private router: Router
  ) { }

  handleSubmit() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos antes de continuar.');
    } else {
      this.userService.login(this.email, this.password).subscribe(user => {
        if (user) {
          alert('login successful');
          this.router.navigate(['/home']);
        } else {
          alert(
            'Invalid email or password, please try again');
        }
      });
    }
  }

  handleNavigate() {
    this.router.navigate(['/auth/signUp']);
  }
}

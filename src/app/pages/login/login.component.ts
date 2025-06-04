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
  username = '';
  password = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  handleSubmit() {
    if (!this.username || !this.password) {
      alert('Preencha todos os campos antes de continuar.');
    }

    this.userService.login(this.username, this.password).subscribe(user => {
      if (user) {
        alert('login successful');
        this.router.navigate(['home']);
      } else {
        alert(
          'Invalid email or password, please try again');
      }
    });
  }

  handleNavigate() {
    this.router.navigate(['/auth/signUp']);
  }
}

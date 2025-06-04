import { Component } from '@angular/core';
import User from '../../Model/user';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
    private router: Router
  ) { }

  handleSignUp() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!this.email || !this.password) {
      alert('Preencha todos os campos antes de continuar.');
      return;
    }

    if (!passwordRegex.test(this.password)) {
      alert('A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, uma minúscula, um número e um símbolo.');
      return;
    }

    const newUser = new User(this.name, this.email, this.password);
    newUser.name = this.name;

    this.userService.createUser(newUser).subscribe(() => {
      alert("Bem vindo ^^");
      this.router.navigate(['home'])
    })
  }

  handleNavigate() {
    this.router.navigate(['/auth/login']);
  }
}

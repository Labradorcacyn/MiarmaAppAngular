import { Component, OnInit } from '@angular/core';
import { AuthLoginDto } from 'src/app/models/dto/auth.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto = new AuthLoginDto();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.login(this.loginDto).subscribe(loginResult=>{
      localStorage.setItem('token', loginResult.token);
      localStorage.setItem('nombreUsuario', loginResult.fullName);
      localStorage.setItem('avatar', loginResult.avatar);
      alert(`${localStorage.getItem('token')}`);
    });
  }

}

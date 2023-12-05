import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/service/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  token: string = ""
  username: string = '';
  password: string = '';
  body: any = {};
  tokenIsValidated: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.get('authentication/token/new').subscribe((data: TokenResponse) => {
      this.token = data.request_token
      console.log(this.token)
    })
  }

  onLoginButtonClick(): void {
    this.body = {
      'username': this.username,
      'password': this.password,
      'request_token': this.token
    }

    this.apiService.post("authentication/token/validate_with_login", this.body).subscribe((data: validateKeyResponse) => {
      if(data.success) {
        this.login()
      }
    })
  }

  login() {
    const body = {
      'request_token': this.token
    }
    this.apiService.post("authentication/session/new", body).subscribe((response: {success: string, session_id: string}) => {
      if(response.success) {
        this.navigateToHome()
      }
    })
  }

  navigateToHome() {
    this.router.navigate(['/films'])
  }
}

interface TokenResponse {
  success: boolean,
  expires_at: string,
  request_token: string
}

interface validateKeyResponse {
  success: boolean,
  status_code: number,
  status_message: string
}
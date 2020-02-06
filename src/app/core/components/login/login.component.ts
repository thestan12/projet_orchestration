import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.isUserAuthenticated(this.loginForm.value.username, this.loginForm.value.password).subscribe(result => {
      this.router.navigateByUrl('/admin');
    });
  }
}

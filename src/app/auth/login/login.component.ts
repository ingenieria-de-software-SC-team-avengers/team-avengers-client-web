import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  form: FormGroup;

  constructor(
    private formLogin: FormBuilder,
    private userService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void{
    this.form = this.formLogin.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  inputInvalid(campo: string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  login(){
    if(this.form.valid){
      const username = this.form.value.username;
      const password = this.form.value.password;
      this.loading = true;
      this.userService.loginUser(username, password).subscribe((res: any) => {
        this.loading = false;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigateByUrl('/client/home');
        this.toast.success(`Bienvenido ${res.user.name}`);
      }, err => {
        this.loading = false;
        this.toast.warning(`${err.error.message} ${username}`);
      });
    }
  }

}

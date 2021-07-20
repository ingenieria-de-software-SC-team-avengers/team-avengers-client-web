import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  form: FormGroup;

  constructor(
    private formRegister: FormBuilder,
    private userService: AuthService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.createForm();
   }

  ngOnInit(): void {
    this.register();
  }

  createForm(): void{
    this.form = this.formRegister.group({
      username: ['', [Validators.required]],
      namecomplete: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      ci: ['', [Validators.required, Validators.pattern('[0-9\\s]+$')]]
    });
  }

  inputInvalid(campo: string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  register(){
    if(this.form.valid){
      const user: User = {
        username: this.form.value.username,
        namecomplete: this.form.value.namecomplete,
        email: this.form.value.email,
        password: this.form.value.password,
        ci: this.form.value.ci
      }
      this.loading = true;
      this.userService.createUser(user).subscribe((res: any) => {
        this.loading = false;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigateByUrl('/client/home');
        this.toast.success(`Bienvenido ${res.user.namecomplete}`);
      }, error => {
        this.loading = false;
        this.toast.warning(`${error.error.message}`);
      });
    }
    this.form.reset();
  }

}

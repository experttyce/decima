import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )] , 
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
    // reset login status
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.loginForm.controls; 
  }
  onSubmit() {
    //this.router.navigate ( [ '/' ] );
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      .subscribe(
        data =>{
          console.log(data);
          this.router.navigate([this.returnUrl]);
        },
        (err) => {
          console.log(err);
        }
      )
  }
}

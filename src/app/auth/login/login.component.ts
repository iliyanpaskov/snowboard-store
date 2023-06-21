import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUserLogin } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    // userData: IUserLogin | any = null;
    // isLoggedIn: boolean = false;

    username: string = '';
    password: string = '';

    constructor(private auth: AuthService, private router: Router) { }

    loginSubmitHandler = (username: string, password: string, form: NgForm) => {
        if (form.invalid) { return }
        this.auth.login(username, password).subscribe({
            next: (res) => {
                this.auth.user = (res);
                this.auth.isLoggedIn = true; 
                // this.isLoggedIn = true;
                
                // console.log(res);
                console.log(this.auth.user);
                console.log(this.auth.isLoggedIn);
            },
            error: (err) => {
                console.log(err);
            }
        })
        form.reset();
        this.router.navigate(['/'])

        // const value: {username:string,password:string} = form.value;
        // form.setValue({username:"",password:""})
        //TODO take username and pass from form not with [(...)] !!!
    }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

    username: string = '';
    password: string = '';

    constructor(private auth: AuthService, private router: Router) { }

    loginSubmitHandler = (username: string, password: string, form: NgForm) => {
        if (form.invalid) { return }
        this.auth.login(username, password).subscribe({
            next: (res) => {
                this.auth.user = (res);
                this.auth.isLoggedIn = true; 
                console.log(this.auth.user);
                console.log(this.auth.isLoggedIn);
            },
            error: (err) => {
                console.log(err);
                this.auth.isLoggedIn = false; 
            }
        })
        form.reset();
        this.router.navigate(['/'])
    }

}

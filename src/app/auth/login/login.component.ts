import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

    username: string = '';
    password: string = '';

    constructor(private auth: AuthService, private router: Router , private toastr:ToastrService) { }

    loginSubmitHandler = (username: string, password: string, form: NgForm) => {
        if (form.invalid) { return }
        this.auth.login(username, password).subscribe({
            next: (res) => {
                this.auth.user = (res);
                this.auth.isLoggedIn = true; 
                this.toastr.success(username, 'Welcome,')
            },
            error: (err) => {
                this.auth.isLoggedIn = false; 
                this.toastr.error(err.error.error)
            }
        })
        form.reset();
        this.router.navigate(['/'])
    }

}

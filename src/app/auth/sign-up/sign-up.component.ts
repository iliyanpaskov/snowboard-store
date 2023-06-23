import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    constructor(private router: Router, private auth: AuthService) { }


    signupHandler(signupForm: NgForm,) { //void?
        if (signupForm.invalid) { return };
        const { username, password, email, address, fullName, phone } = signupForm.value;
        const register = async () => {
            let res = await this.auth.signUp(username, password, email, address, fullName, phone)
            this.auth.isLoggedIn = true;
            this.auth.user = res;
            console.log(res);
            console.log(this.auth.user);
        }
        register()
        this.router.navigate(['/']);
    }


}

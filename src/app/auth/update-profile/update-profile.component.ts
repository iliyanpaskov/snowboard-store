import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUserProfile } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

    currentUser: IUserProfile | undefined = undefined;
    token: any = this.auth.user?.sessionToken;
    isLoading:boolean = true;

    constructor(private auth: AuthService, private router: Router) { }

    updateHandler(id: any, sessionToken: any, updateForm: NgForm) {
        if (updateForm.invalid) { return };
        const { username, email, address, fullName, phone } = updateForm.value;
        const res = async () => {
            const update = await this.auth.updateUser(id, sessionToken,username, email, address, fullName, phone )
            this.currentUser = update;
        }
        res();
        this.auth.user = updateForm.value
        this.router.navigate(['/']);
    }



    ngOnInit(): void {
        const loadForm = async () => {
            const user = await this.auth.currentUser(this.token);
            this.currentUser = user;
            this.isLoading = false;
        }
        loadForm();
    }

}

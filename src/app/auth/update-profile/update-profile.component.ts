import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

    currentUser = this.auth.user;
    token = this.auth.user?.sessionToken as string;

    constructor(private auth: AuthService, private router: Router) { }

    updateHandler(id: any, sessionToken: any, updateForm: NgForm) {
        if (updateForm.invalid) { return };
        const { username, email, address, fullName, phone } = updateForm.value;
        const res = async () => {
            const update = await this.auth.updateUser(id, sessionToken, username, email, address, fullName, phone);
            if (!update.error) {
                this.currentUser = {
                    objectId: id,
                    username: username,
                    email: email,
                    address: address,
                    fullName: fullName,
                    phone: phone,
                    sessionToken: sessionToken,
                    updatedAt: update.updatedAt,
                };
                this.auth.user = this.currentUser;
                this.router.navigate(['/']);
            } else {
                updateForm.reset();
            }
        }
        res();
    }



}

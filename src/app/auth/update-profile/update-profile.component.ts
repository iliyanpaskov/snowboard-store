import { Component, OnInit } from '@angular/core';
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

    constructor(private auth: AuthService) { }




    ngOnInit(): void {
        const loadForm = async () => {
            console.log(this.token);
            console.log(this.auth.user);
            
            const user = await this.auth.currentUser(this.token);
            this.currentUser = user;
        }
        loadForm();
    }

}

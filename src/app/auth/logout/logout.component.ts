import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.toastr.info(`Goodbye ${this.auth.user?.username}`);
        this.auth.isLoggedIn = false;
        this.auth.user = null;
        this.router.navigate(['/']);
    }

}

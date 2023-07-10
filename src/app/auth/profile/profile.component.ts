import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUserProfile } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: IUserProfile | null = null;
  token = this.auth.user?.sessionToken as string;
  isLoading: boolean = true;

  constructor(private auth: AuthService, private router: Router) { }

  deleteHandler(id: string | undefined, sessionToken: string | undefined) {
    const res = async () => {
      const delData = await this.auth.deleteUser(id as string, sessionToken as string)
      this.currentUser = null;
    }
    res();
    this.auth.isLoggedIn = false;
    this.auth.user = null
    this.router.navigate(['/'])
  }



  ngOnInit(): void {
    const userData = async () => {
      const res = await this.auth.currentUser(this.token)
      this.currentUser = res;
      this.isLoading = false;
    }
    userData();
  }
}


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUserProfile } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:IUserProfile | null = null;  
  token:any = this.auth.user?.sessionToken 

  constructor(private auth: AuthService) { }
  

  ngOnInit(): void {
    console.log(this.token);
    
    const userData =async () => {
      const res = await this.auth.currentUser(this.token)
      this.currentUser = res;
    }
    userData();
  }
}


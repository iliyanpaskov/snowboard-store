import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IUserLogin } from '../shared/interfaces';
import { Router } from '@angular/router';

const apiURL = environment.apiURL;
const signupURL = environment.apiSignUpURL;

const headers = {
  'X-Parse-Application-Id': environment.applicationId,
  'X-Parse-REST-API-Key': environment.apiKey,
  'X-Parse-Revocable-Session': environment.session,
  'Content-Type': environment.contentType
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  isLoggedIn: boolean = false;
  user: IUserLogin | null = null

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    const url: string = `${apiURL}/login?username=${username}&password=${password}`;
    this.isLoggedIn = true
    const data = this.http.get<IUserLogin>(url, {
      headers: headers,
    })
    console.log(data);
    // console.log(this.user);

    return data
  }



  async currentUser(sessionToken: string) {
    const url = `${signupURL}/me`;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          'X-Parse-Application-Id': environment.applicationId,
          'X-Parse-REST-API-Key': environment.apiKey,
          'X-Parse-Session-Token': sessionToken,
        }
      })
      const data = await res.json();
      if (!data.error) {
        return data;
      } else {
        throw data.error;
      }
      // else if (data.status !== 200){
      //   tr
      // }
    } catch (error) {
      console.log(error);
    }

  }

  async signUp(username: string, password: string, email: string, address: string, fullName: string, phone: string) {
    try {
      const res = await fetch(signupURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          username,
          password,
          email,
          address,
          fullName,
          phone,
        })
      });
      const data = await res.json();
      if (!data.error) {
        return data
      } else {
        throw data.error
      }
    } catch (error) {

    }
  }


  deleteUser() {

  }

}

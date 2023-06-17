import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IUserLogin } from '../shared/interfaces';

const apiURL = environment.apiURL;
const headers = {
  'X-Parse-Application-Id': environment.applicationId,
  'X-Parse-REST-API-Key': environment.apiKey,
  'X-Parse-Revocable-Session': environment.session,
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    const url: string = `${apiURL}/login?username=${username}&password=${password}`;
    return this.httpClient.get<IUserLogin>(url, {
      headers: headers,
    })
  }

}

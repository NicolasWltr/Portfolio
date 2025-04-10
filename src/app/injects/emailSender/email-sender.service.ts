import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmailSenderService {
  private apiUrl = 'https://walternicolas.de/api/';
  private sendEmailUrl = 'email/send';
  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    const data = {
      name: name,
      email: email,
      message: message
    };
    
    return this.http.post(this.apiUrl + this.sendEmailUrl, data);
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url:string="http://192.168.1.5:8080/sendemail"
  constructor(private http:HttpClient) { }
  sendmail(data:object){
    return this.http.post(this.url, data)
  }
}

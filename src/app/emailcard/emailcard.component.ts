import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/api/email.service';

@Component({
  selector: 'app-emailcard',
  templateUrl: './emailcard.component.html',
  styleUrls: ['./emailcard.component.scss']
})
export class EmailcardComponent implements OnInit {
  data = {
    to : '',
    subject : '',
    body : '',
  }

  constructor(private email:EmailService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  SendEmail(){
    this.email.sendmail(this.data).subscribe((response:any)=>{
      this.snack.open(response.response)
      this.data = {
        to : '',
        subject : '',
        body : '',
      }
    }, (error)=>{
      console.error(error);
    })
  }
}

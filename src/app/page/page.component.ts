import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private snack : MatSnackBar) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.snack.open("Mail sent", "X")
  }
}

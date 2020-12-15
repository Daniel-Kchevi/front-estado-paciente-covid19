import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-ok',
  templateUrl: './dialog-ok.component.html',
  styleUrls: ['./dialog-ok.component.css']
})
export class DialogOkComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {    
  }

  refresh(): void {
    this.route.navigate(['home'])
    window.location.reload();
  }

}

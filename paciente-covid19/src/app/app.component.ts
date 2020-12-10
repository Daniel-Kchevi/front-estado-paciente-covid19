import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{
  title = 'paciente-covid19';
  
  backgroundColor: ThemePalette
  color: ThemePalette

  constructor(private route: Router) {}
  
  ngOnInit(): void {
    this.route.navigate(['home'])
  }
  
}


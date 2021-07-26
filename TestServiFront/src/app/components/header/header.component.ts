import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() cerrarSesion: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigateByUrl('/login');
    }
    this.cerrarSesion.emit(null);
  }

salir(){
  localStorage.removeItem('token');
  this.cerrarSesion.emit(null);
  this.router.navigateByUrl('/login');
}
}

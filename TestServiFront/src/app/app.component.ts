import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestServiFront';
  mostrarHeader = true;
  constructor(){
    setInterval( () => {
      this.ocultarHeader();
    }, 1000);
  }

  ocultarHeader(){
    if (localStorage.getItem('token') === null){
      this.mostrarHeader = false;
    }else{
      this.mostrarHeader = true;
    }
  }
}



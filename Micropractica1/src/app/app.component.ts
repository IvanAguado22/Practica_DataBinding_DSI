import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COMANDA';

  public lineas=['Esto es una linea prueba'];
  
  public addLinea()
  {
	  this.lineas.push('Linea de ejemplo '+(this.lineas.length+1));
  }
  
  public delLinea(i: number)
  {
	  this.lineas.splice(i,1);
  }
}

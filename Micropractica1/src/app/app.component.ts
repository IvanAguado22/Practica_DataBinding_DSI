import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COMANDA';

  public lineas=[''];
  public cod_comand = 0;
  public comanda:Array<[string,number]>=[['cerdo',5.5],['arroz',3.5],['ternera',7]];

  public addLinea()
  {
	  this.lineas.push('Ejemplo');
  }
  
  public delLinea(i: number)
  {
	  this.lineas.splice(i,1);
  }
}

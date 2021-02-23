import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COMANDA';
  public total:number = 0;
  public lineas:Array<[string,number]>=[];
  public cod_comand = 0;
  public comanda:Array<[string,number]>=[['Cerdo agridulce',5.5],['Arroz tres delicias',3.5],['Ternera con bambu y setas',7]];

  public addLinea(i: number)
  {
	  this.lineas.push(this.comanda[i]);
    this.total += this.lineas[i][1];
    console.log(this.comanda[i][1]);
    console.log(this.total);
  }
  
  public delLinea(i: number)
  {
	  this.lineas.splice(i,1);
  }
}

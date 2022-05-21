import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    let obs=new Observable(Observer=>{
      let contador=0;
      let intervalo=setInterval(()=>{
        contador+=1;
        Observer.next(contador);
        if(contador===5){
          clearInterval(intervalo);
          Observer.complete();
        }else {
          if(contador==2){
            Observer.error('Auxilio')
          }
        }
      }, 1000);
    
   });

   //escuchar
   obs.subscribe(numero=>{                         //next
     console.log('Subs', numero);
   },
   error=>console.error('Error en el obs', error), //Error
   ()=>console.log('El observador termino!')       //Termino
   );

}

  ngOnInit(): void {
  }   
  
}

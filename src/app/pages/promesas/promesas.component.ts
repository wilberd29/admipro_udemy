import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
//trareas sincronas, http, etc

  constructor() { 
    let promesa = new Promise((resolve, reject) => {
    let contador=0;
    let intervalo= setInterval(function() {
        contador+=1;
        console.log(contador)
        if(contador===3){
          resolve('Ok');
          //reject('Simpemente un error')
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promesa.then(
      (mensaje)=> console.log('Termino', mensaje)
    )
    .catch(error=> console.error('Error en la promesa', error))

    //-------Otra Forma--------------------------------------------------------------------
    this.contarTres().then(
      mensaje=>console.log('Termino!', mensaje)
    )
    .catch(error=>console.error('Error en la promesa', error));
    }

    contarTres():Promise<Boolean>{
        return new Promise((resolve, reject) => {
        let contador=0;
        let intervalo= setInterval(function() {
            contador+=1;
            console.log(contador)
            if(contador===6){
              resolve(true);
              //reject('Simplemente un error')
              clearInterval(intervalo);
            }
          }, 1000);
        });
    }
  

  ngOnInit(): void {
  }


}

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes={
    temaUrl: 'assets/css/colors/blue-dark.css',
    tema:'blue-dark'
  };

  constructor(@Inject(DOCUMENT) private _document: Document) {  
    this.cargarAjustes();
  }

guardarAjustes(){
  console.log('Guardado en el localStorage')
  localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
}

cargarAjustes(){
  if (localStorage.getItem('ajustes')) {
    const dato = localStorage.getItem('ajustes')
    //Solo entra si no es nulo. 
    if(dato) this.ajustes=JSON.parse(dato);
    this.aplicarTema(this.ajustes.tema);
    console.log('Cargando de Ajustes');
  }else{
    console.log('Usando valores por defecto');
    this.aplicarTema(this.ajustes.tema);
  }
}

aplicarTema(tema: string ){
  let url=`assets/css/colors/${tema}.css`
  this._document.getElementById('tema')?.setAttribute('href', url) ;
  this.ajustes.tema=tema;
  this.ajustes.temaUrl=url;
  this.guardarAjustes();
}
}

interface Ajustes{
  temaUrl: string,
  tema: string
}
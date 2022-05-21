import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  
  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {
  }

  cambiarColor(tema: string, link: any){
    console.log(tema);
    // //manipular el DOM
    // let url=`assets/css/colors/${tema}.css`
    // //this._document.getElementById('tema')?.setAttribute('href', url) ;
    // this._ajustes.ajustes.tema=tema;
    // this._ajustes.ajustes.temaUrl=url;
    // this._ajustes.guardarAjustes();
    this._ajustes.aplicarTema(tema);
  }
}


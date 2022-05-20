import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress!: ElementRef;
  @Input('nombre') leyenda: string="Leyenda"
  @Input() progreso: number=10;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onChanges(newValor: number){
    //console.log(newValor);
    //let elementHtml: any=document.getElementsByName('progreso')[0];
    //console.log(elementHtml.value);

    if(newValor>=100){
      this.progreso=100;
    }else if(newValor<=0){
      this.progreso=0;
    }else {
      this.progreso=newValor;
    }
      
      //elementHtml.value=Number(this.progreso)
      this.txtProgress.nativeElement.value=this.progreso;
      this.cambioValor.emit( this.progreso );
}

  cambiarValor(valor: number){
    if(this.progreso>=100 && valor>0){
      this.progreso=100;
      return;
    }
    if(this.progreso<=0 && valor<0){
      this.progreso=0;
      return;
    }

    this.progreso=this.progreso + valor;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }
}

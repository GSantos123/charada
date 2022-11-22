import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  charada: string='';
  resposta: string='';


  animacao:boolean=false;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarCharada();
  }

  solicitarCharada(){
    this.animacao=false;
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get<any[]>(url).subscribe( charada => {
      this.charada = charada[0].charada;
      this.resposta = charada[0].resposta;  
      this.animacao = true;
    });
  }

  Revelar(){
    
    
  }

  Gerar(){

    this.solicitarCharada;

  }

}
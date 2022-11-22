import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pergunta: string='';
  resposta: string='';
  respostaSecreta: string='';
  

  animacao:boolean=false;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarCharada();
  }

  solicitarCharada(){
    this.animacao=false;
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get<any[]>(url).subscribe( charada => {
      this.pergunta = charada[0].pergunta;
      this.respostaSecreta = charada[0].resposta;
      this.animacao = true;
    });
  }

  Revelar(){
    
    this.solicitarResposta();


  }
  
  solicitarResposta(){
    this.resposta = this.respostaSecreta;
  }

  refresh(): void {
    window.location.reload();
}

  

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
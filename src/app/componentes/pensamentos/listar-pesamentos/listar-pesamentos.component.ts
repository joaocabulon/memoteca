import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pesamentos',
  templateUrl: './listar-pesamentos.component.html',
  styleUrls: ['./listar-pesamentos.component.css'],
})
export class ListarPesamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtu: number = 1
  haMaisPensamentos: boolean = true
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtu).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtu).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }
}

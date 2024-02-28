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

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}

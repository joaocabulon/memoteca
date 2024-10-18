import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  constructor( private service: PensamentoService, private router: Router, private formBuilder: FormBuilder) { }

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose(
        [
          Validators.required, 
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ]
      )],
      autoria: ['', Validators.compose([Validators.minLength(3), Validators.required, Validators.pattern('^[a-z]+$')])], 
      modelo: ['modelo1']
    })
  }
  criarNovoPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {this.router.navigate(['/listarPensamento'])})
    }
  }
  cancelarNovoPensamento() {
    alert("Canceled")
    this.router.navigate(['/listarPensamento'])
  }

}

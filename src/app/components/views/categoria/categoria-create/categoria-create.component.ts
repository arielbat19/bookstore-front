import { Router } from '@angular/router';
import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe({
      next: () => {
        this.router.navigate(['categorias'])
        this.service.mensagem('Categoria criada com sucesso!');
      }, 
      
      error: (err) => {
        for(let i = 0; i < err.error.errors.lenght; i++) {
          this.service.mensagem(err.error.errors[i].message)
        }
      }})
  }

  cancela(): void {
    this.router.navigate(['categorias'])
  }

}

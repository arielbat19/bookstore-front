import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'categorias',
    component: CategoriaReadComponent
  },

  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },

  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },

  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },

  {
    path: 'categorias/:id_cat/livros',
    component: LivroReadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

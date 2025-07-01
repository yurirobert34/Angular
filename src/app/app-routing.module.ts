// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe seus componentes aqui para que possam ser associados às rotas
import { HomeComponent } from './pages/home/home.component';
import { PacienteListComponent } from './pages/pacientes/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './pages/pacientes/paciente-form/paciente-form.component';
import { PacienteDetailComponent } from './pages/pacientes/paciente-detail/paciente-detail.component';
import { FuncionarioListComponent } from './pages/funcionarios/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './pages/funcionarios/funcionario-form/funcionario-form.component';
import { FuncionarioDetailComponent } from './pages/funcionarios/funcionario-detail/funcionario-detail.component';
import { ProntuarioFuncionarioComponent } from './pages/funcionarios/prontuario-funcionario/prontuario-funcionario.component';
import { ConvenioListComponent } from './pages/convenios/convenio-list/convenio-list.component';
import { ConvenioFormComponent } from './pages/convenios/convenio-form/convenio-form.component';
import { ConsultaListComponent } from './pages/consultas/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './pages/consultas/consulta-form/consulta-form.component';

// Defina o array de rotas
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Rotas de Pacientes
  { path: 'pacientes', component: PacienteListComponent },
  { path: 'pacientes/novo', component: PacienteFormComponent },
  { path: 'pacientes/editar/:id', component: PacienteFormComponent },
  { path: 'pacientes/detalhe/:id', component: PacienteDetailComponent },

  // Rotas de Funcionários
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/novo', component: FuncionarioFormComponent },
  { path: 'funcionarios/editar/:id', component: FuncionarioFormComponent },
  { path: 'funcionarios/detalhe/:id', component: FuncionarioDetailComponent },
  { path: 'funcionarios/prontuario/:id', component: ProntuarioFuncionarioComponent },

  // Rotas de Convênios
  { path: 'convenios', component: ConvenioListComponent },
  { path: 'convenios/novo', component: ConvenioFormComponent },
  { path: 'convenios/editar/:id', component: ConvenioFormComponent },

  // Rotas de Consultas
  { path: 'consultas', component: ConsultaListComponent },
  { path: 'consultas/novo', component: ConsultaFormComponent },
  { path: 'consultas/editar/:id', component: ConsultaFormComponent },

  { path: '**', redirectTo: '/home' } // Rota curinga para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura o roteador raiz
  exports: [RouterModule] // Exporta o RouterModule para usar diretivas como routerLink e router-outlet
})
export class AppRoutingModule { }

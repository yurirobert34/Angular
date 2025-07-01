import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {
  isEditMode: boolean = false;
  consultaId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.consultaId = params.get('id');
      this.isEditMode = !!this.consultaId;
      if (this.isEditMode) {
        // Futuramente: Carregar dados da consulta pelo ID para preencher o formulário
        console.log('Modo de edição. ID da consulta:', this.consultaId);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/consultas']);
  }
}

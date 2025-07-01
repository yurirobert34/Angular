import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-detail',
  templateUrl: './funcionario-detail.component.html',
  styleUrls: ['./funcionario-detail.component.css']
})
export class FuncionarioDetailComponent implements OnInit {
  funcionarioId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.funcionarioId = params.get('id');
      if (this.funcionarioId) {
        console.log('Carregando detalhes do funcionário com ID:', this.funcionarioId);
      }
    });
  }

  editFuncionario(): void {
    if (this.funcionarioId) {
      this.router.navigate(['/funcionarios/editar', this.funcionarioId]);
    }
  }

  viewProntuario(): void {
    if (this.funcionarioId) {
      this.router.navigate(['/funcionarios/prontuario', this.funcionarioId]);
    }
  }

  goBack(): void {
    this.router.navigate(['/funcionarios']);
  }
}

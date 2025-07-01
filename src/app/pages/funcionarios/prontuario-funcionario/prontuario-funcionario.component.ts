import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prontuario-funcionario',
  templateUrl: './prontuario-funcionario.component.html',
  styleUrls: ['./prontuario-funcionario.component.css']
})
export class ProntuarioFuncionarioComponent implements OnInit {
  funcionarioId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.funcionarioId = params.get('id');
      if (this.funcionarioId) {
        // Futuramente: Carregar dados do prontuário para este funcionário
        console.log('Carregando prontuário para funcionário com ID:', this.funcionarioId);
      }
    });
  }

  goBack(): void {
    // Volta para a página de detalhes do funcionário ou para a lista, dependendo do fluxo
    if (this.funcionarioId) {
      this.router.navigate(['/funcionarios/detalhe', this.funcionarioId]);
    } else {
      this.router.navigate(['/funcionarios']);
    }
  }
}

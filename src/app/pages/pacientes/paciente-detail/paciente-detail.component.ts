import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {
  pacienteId: string | null = null; // Para armazenar o ID do paciente

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtém o ID do paciente da URL
    this.route.paramMap.subscribe(params => {
      this.pacienteId = params.get('id');
      if (this.pacienteId) {
        // No futuro: Carregar os detalhes do paciente usando este ID
        console.log('Carregando detalhes do paciente com ID:', this.pacienteId);
      }
    });
  }

  editPaciente(): void {
    // Navega para a rota de edição do paciente
    if (this.pacienteId) {
      this.router.navigate(['/pacientes/editar', this.pacienteId]);
    }
  }

  goBack(): void {
    // Volta para a lista de pacientes
    this.router.navigate(['/pacientes']);
  }
}

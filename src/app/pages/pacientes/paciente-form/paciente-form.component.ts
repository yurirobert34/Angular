import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {
  isEditMode: boolean = false;
  pacienteId: string | null = null; // Para armazenar o ID do paciente em modo de edição

  constructor(
    private route: ActivatedRoute, // Para obter parâmetros da rota
    private router: Router         // Para navegação programática
  ) { }

  ngOnInit(): void {
    // Verifica se estamos no modo de edição (se houver um ID na URL)
    this.route.paramMap.subscribe(params => {
      this.pacienteId = params.get('id');
      this.isEditMode = !!this.pacienteId; // isEditMode será true se pacienteId tiver um valor
      if (this.isEditMode) {
        // No futuro: Carregar dados do paciente pelo ID para preencher o formulário
        console.log('Modo de edição. ID do paciente:', this.pacienteId);
      }
    });
  }

  // Método para voltar para a lista de pacientes
  goBack(): void {
    this.router.navigate(['/pacientes']);
  }
}

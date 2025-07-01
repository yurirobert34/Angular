import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  isEditMode: boolean = false;
  funcionarioId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.funcionarioId = params.get('id');
      this.isEditMode = !!this.funcionarioId;
      if (this.isEditMode) {
        console.log('Modo de edição. ID do funcionário:', this.funcionarioId);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/funcionarios']);
  }
}

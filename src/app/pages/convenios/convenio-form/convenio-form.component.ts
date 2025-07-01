import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-convenio-form',
  templateUrl: './convenio-form.component.html',
  styleUrls: ['./convenio-form.component.css']
})
export class ConvenioFormComponent implements OnInit {
  isEditMode: boolean = false;
  convenioId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.convenioId = params.get('id');
      this.isEditMode = !!this.convenioId;
      if (this.isEditMode) {
        // Futuramente: Carregar dados do convênio pelo ID para preencher o formulário
        console.log('Modo de edição. ID do convênio:', this.convenioId);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/convenios']);
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SolicitationsService } from 'src/app/services/solicitations.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  @ViewChild('closeButton') closeButton: ElementRef;
  solicitation
  modalSelect = -1

  solicitationForm = this.fb.group({
    status: [''],
    reason: ['', Validators.required]
  })

  modalOptions = [
    { title: 'Aprovar solicitação', status: 'Aprovado' },
    { title: 'Solicitação em análise', status: 'Em análise' },
    { title: 'Rejeitar solicitação', status: 'Inapto' },
    { title: 'Devolver solicitação', status: 'Devolvido' }
  ]

  constructor(private _solicitationsService: SolicitationsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this._solicitationsService.currentMessage.subscribe(solicitation => this.solicitation = solicitation)
  }

  updateSolicitation(){
    let status
    switch (this.modalSelect) {
      case 0:
        status = 'Aprovado'
        break;
      case 1:
        status = 'Analise'
        break;
      case 2:
        status = 'Inapto'
        break;
      case 3:
        status = 'Devolvido'
        break;
    
      default:
        break;
    }
    let reason = this.solicitationForm.controls['reason'].value
    this._solicitationsService.updateStatus(this.solicitation.id, status, reason)
    this.solicitationForm.controls['reason'].setValue('')
    this.triggerFalseClick()
  }

  selectModal(number){
    this.modalSelect = number
  }
  
  triggerFalseClick() {
    let el = this.closeButton.nativeElement as HTMLElement
    el.click();
  }
}

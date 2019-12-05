import { FilterNamePipe } from './../../pipes/filter-name.pipe';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SolicitationsService } from 'src/app/services/solicitations.service';

@Component({
  selector: 'app-solicitations',
  templateUrl: './solicitations.component.html',
  styleUrls: ['./solicitations.component.css']
})
export class SolicitationsComponent implements OnInit {

  selectedSolicitation
  loading = true
  status = ''

  text = ''
  filterName: FilterNamePipe

  solicitations: any[] = []
  message:string = 'Hellow'


  constructor(private _solicitationService: SolicitationsService) { }

  ngOnInit() {
    this.getSolicitations()
  }

  selectSolicitation(solicitation) {
    this._solicitationService.changeMessage(solicitation)
  }

  verify(solicitation){
    let selected
    this._solicitationService.currentMessage.subscribe(
      res => selected = res
    )
    if (selected && solicitation.id == selected.id)
      return true
    else
      false
  }
  
  getSolicitations(){
    this._solicitationService.getSolicitations().subscribe(
      res => {
        this.solicitations = []
        res.forEach(element => {
          this.solicitations.push(element.payload.doc.data())
        });
        this.loading = false
      }
    )
  }

}

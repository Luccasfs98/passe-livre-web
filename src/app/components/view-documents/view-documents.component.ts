import { Component, OnInit } from '@angular/core';
import { SolicitationsService } from 'src/app/services/solicitations.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.css']
})
export class ViewDocumentsComponent implements OnInit {
  solicitation
  files: any[] = []
  selectedFile

  constructor(private _solicitationsService: SolicitationsService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._solicitationsService.currentMessage.subscribe(solicitation => {
      this.solicitation = solicitation
      if (this.solicitation != null) {
        this.files = []
        this._solicitationsService.getFiles(this.solicitation.id).subscribe(files => {
          files.forEach(file => {
            this.files.push(file.payload.doc.data())
          })
        })
      }
    })
  }

  selectFile(file) {
    this.selectedFile = file
  }

  verify(file) {
    if (this.selectedFile)
      return (file.name == this.selectedFile.name)? true : false
    return false
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openLightbox() {
    document.getElementById("myModal").style.display = "block"
  }

  closeLightbox() {
    document.getElementById("myModal").style.display = "none"
  }

}

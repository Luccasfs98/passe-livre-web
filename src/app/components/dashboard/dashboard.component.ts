import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SolicitationsService } from "src/app/services/solicitations.service";
import { SolicitationsComponent } from "../solicitations/solicitations.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  users;

  constructor(
    private route: Router,
    private _solicitationsService: SolicitationsService
  ) {}

  ngOnInit() {
    this._solicitationsService.currentMessage.subscribe(
      message => (this.message = message)
    );
  }

  message: string;

  gotoSolicitations() {
    this.route.navigate(["solicitations"]);
  }

  gotoTeste() {
    this.route.navigate(["teste"]);
  }
}

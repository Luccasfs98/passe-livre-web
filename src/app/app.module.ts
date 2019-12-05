import { ROUTES } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SolicitationsComponent } from "./components/solicitations/solicitations.component";
import { MainComponent } from "./components/main/main.component";
import { ViewDocumentsComponent } from "./components/view-documents/view-documents.component";
import { InformationsComponent } from "./components/informations/informations.component";
import { LoginComponent } from "./components/login/login.component";
import { LoaderComponent } from "./components/loader/loader.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { AuthService } from "./services/auth.service";
import { FilterNamePipe } from "./pipes/filter-name.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SolicitationsComponent,
    MainComponent,
    InformationsComponent,
    ViewDocumentsComponent,
    LoginComponent,
    LoaderComponent,
    FilterNamePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

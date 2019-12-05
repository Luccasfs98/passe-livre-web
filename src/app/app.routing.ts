import { AuthGuard } from "./guards/auth.guard";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/login/login.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [{ path: "dashboard", component: DashboardComponent }]
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {
  useHash: true
});

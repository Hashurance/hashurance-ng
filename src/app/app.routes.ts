import {Routes} from "@angular/router";
import {IdentityComponent} from "./pages/identity/identity.component";
import {InsuranceComponent} from "./pages/insurance/insurance.component";
import {GpComponent} from "./pages/gp/gp.component";
import {ClientcheckComponent} from "./pages/clientcheck/clientcheck.component";
import {PaymentComponent} from "./pages/payment/payment.component";

export const AppRoutes: Routes = [
  {path: '', component: IdentityComponent},
  {path: 'insurance', component: InsuranceComponent},
  {path: 'gp', component: GpComponent},
  {path: 'clientcheck', component: ClientcheckComponent},
  {path: 'payment', component: PaymentComponent}
];

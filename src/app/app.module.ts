import "hammerjs";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RootComponent} from "./pages/root/root.component";
import {IdentityComponent} from "./pages/identity/identity.component";
import {AppRoutes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {
  MdSnackBarModule,
  MdRadioModule,
  MdInputModule,
  MdDialogModule,
  MdChipsModule,
  MdCheckboxModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdCoreModule,
  MaterialModule
} from "@angular/material";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {InsuranceComponent} from "./pages/insurance/insurance.component";
import {GpComponent} from "./pages/gp/gp.component";
import {ClientcheckComponent} from "./pages/clientcheck/clientcheck.component";
import {PaymentComponent} from "./pages/payment/payment.component";
import {FormService} from "./services/form/form.service";
import {SendetherComponent} from "./sendether/sendether.component";
import {DepositFormComponent} from "./deposit-form/deposit-form.component";
//SharedService exposing contracts from truffle to the Dapp
import {SharedService} from "./services/shared.service";
import {StateService} from "./services/state/state.service";

@NgModule({
  declarations: [
    RootComponent,
    IdentityComponent,
    NavbarComponent,
    InsuranceComponent,
    GpComponent,
    ClientcheckComponent,
    PaymentComponent,
    SendetherComponent,
    DepositFormComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    // Angular Material
    MaterialModule,
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDialogModule,
    MdInputModule,
    MdRadioModule,
    MdSnackBarModule
  ],
  providers: [
    SharedService,
    FormBuilder,
    FormService,
    StateService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }

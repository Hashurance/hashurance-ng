import { Component, OnInit } from '@angular/core';
import {FormMetadata} from "../../services/form/form.class";
import {Router} from "@angular/router";
import {FormService} from "../../services/form/form.service";
import {InsuranceService} from "../../services/insurance/insurance.service";
import {StateService} from "../../services/state/state.service";

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService,
    private stateService: StateService,
	  private insuranceService: InsuranceService
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();

    if(this.formMetadata.uid1 == "") {
      this.router.navigateByUrl('/');
    }
  }

  submitContractRequest() {
    let contractId = this.insuranceService.createContract(this.formMetadata.uid1).then((contractId) => {
      this.formMetadata.cid = contractId;
      let uid = this.stateService.generateUID(this.formMetadata.socialSecurityNumber);
      this.formMetadata.uid2 = uid;
      console.log(JSON.stringify(this.formMetadata));

      this.formService.set(this.formMetadata);
      this.router.navigateByUrl('gp');
    }).catch(e => {
      console.log(JSON.stringify(e))
    });
  }
}

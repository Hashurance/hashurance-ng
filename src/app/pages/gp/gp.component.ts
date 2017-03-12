import { Component, OnInit } from '@angular/core';
import {FormMetadata} from "../../services/form/form.class";
import {Router} from "@angular/router";
import {FormService} from "../../services/form/form.service";
import {MedProviderService} from "../../services/medProvider/medProvider.service";
import {StateService} from "../../services/state/state.service";

@Component({
  selector: 'app-gp',
  templateUrl: './gp.component.html',
  styleUrls: ['./gp.component.css']
})
export class GpComponent implements OnInit {

  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService,
    private medProviderService: MedProviderService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();

    if(this.formMetadata.cid == "") {
      this.router.navigateByUrl('/insurance');
    }
  }

  issueRefundRequest() {
    console.log(JSON.stringify(this.formMetadata));

    this.formService.set(this.formMetadata);
    this.router.navigateByUrl('clientcheck');
  }
}

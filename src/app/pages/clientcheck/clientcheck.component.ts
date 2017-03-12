import { Component, OnInit } from '@angular/core';
import {FormService} from "../../services/form/form.service";
import {Router} from "@angular/router";
import {FormMetadata} from "../../services/form/form.class";
import {StateService} from "../../services/state/state.service";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-clientcheck',
  templateUrl: './clientcheck.component.html',
  styleUrls: ['./clientcheck.component.css']
})
export class ClientcheckComponent implements OnInit {

  private error: boolean = false;
  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService,
    private stateService: StateService,
    private snackBar: MdSnackBar
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();
    this.error = false;

    if(this.formMetadata.uid1 == "" || this.formMetadata.uid2 == "") {
      this.router.navigateByUrl('/gp');
    }
  }

  checkClient() {
    this.stateService.validateClient(this.formMetadata.uid2).then(() => {
      console.log(JSON.stringify(this.formMetadata));

      this.formService.set(this.formMetadata);
      this.router.navigateByUrl('payment');
    }).catch(e => {
      this.error = true;
      console.error(JSON.stringify(e));
      this.snackBar.open(e.toString(), 'Close');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormService} from "../../services/form/form.service";
import {Router} from "@angular/router";
import {FormMetadata} from "../../services/form/form.class";

@Component({
  selector: 'app-clientcheck',
  templateUrl: './clientcheck.component.html',
  styleUrls: ['./clientcheck.component.css']
})
export class ClientcheckComponent implements OnInit {

  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();

    if(this.formMetadata.uid1 == "" || this.formMetadata.uid2 == "") {
      this.router.navigateByUrl('/gp');
    }
  }

  checkClient() {
    console.log(JSON.stringify(this.formMetadata));

    this.formService.set(this.formMetadata);
    this.router.navigateByUrl('payment');
  }
}

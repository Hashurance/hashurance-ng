import { Component, OnInit } from '@angular/core';
import {FormService} from "../../services/form/form.service";
import {Router} from "@angular/router";
import {FormMetadata} from "../../services/form/form.class";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();

    if(this.formMetadata.cid == "" || this.formMetadata.uid1 == "" || this.formMetadata.uid2 == "") {
      this.router.navigateByUrl('/clientcheck');
    }
  }
}

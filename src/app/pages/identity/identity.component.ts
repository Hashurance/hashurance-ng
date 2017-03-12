import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormService} from "../../services/form/form.service";
import {FormMetadata} from "../../services/form/form.class";
import {StateService} from "../../services/state/state.service";

@Component({
  selector: 'app-identity',
  templateUrl: 'identity.component.html',
  styleUrls: ['identity.component.css']
})
export class IdentityComponent implements OnInit {

  private formMetadata: FormMetadata;

  constructor(
    private router: Router,
    private formService: FormService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();
  }

  generateUniqueIdentifier() {
    let uid = this.stateService.generateUID(this.formMetadata.socialSecurityNumber);
    this.formMetadata.uid1 = uid;

    console.log(JSON.stringify(this.formMetadata));

    this.formService.set(this.formMetadata);
    this.router.navigateByUrl('insurance');
  }
}

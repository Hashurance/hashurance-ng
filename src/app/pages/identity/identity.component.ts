import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormService} from "../../services/form/form.service";
import {FormMetadata} from "../../services/form/form.class";
import {StateService} from "../../services/state/state.service";
import {MdSnackBar} from "@angular/material";

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
    private stateService: StateService,
    private snackBar: MdSnackBar
  ) {}

  ngOnInit(): void {
    this.formMetadata = this.formService.get();
  }

  generateUniqueIdentifier() {
    this.stateService.generateUID(this.formMetadata.socialSecurityNumber).then(tx =>{
		  this.formMetadata.uid1 = tx.tx;

	    console.log(JSON.stringify(this.formMetadata));

	    this.formService.set(this.formMetadata);
	    this.router.navigateByUrl('insurance');
  	}).catch(e => {
      console.error(e);
      this.snackBar.open(e.toString(), 'Close');
    });
  }
}

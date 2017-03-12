import {Injectable} from "@angular/core";
import {FormMetadata} from "./form.class";

@Injectable()
export class FormService {

  private formMetadata: FormMetadata;

  constructor() {
    this.formMetadata = new FormMetadata();
  }

  get(): FormMetadata {
    return this.formMetadata;
  }

  set(formMetadata: FormMetadata) {
    this.formMetadata = formMetadata;
  }
}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export function referenceValidator(control: AbstractControl):  ValidationErrors | null {
 // One uppercase at least
 const referenceRegex = RegExp(/[0-9]\#[A-Z0-9]+/g);
 const valid = referenceRegex.test(control.value);

 const errors = {
   reference: {
     rules: 'should be uppercase and follow strict rules (see doc)'
   }
 };

 return !valid ? errors : null;
}

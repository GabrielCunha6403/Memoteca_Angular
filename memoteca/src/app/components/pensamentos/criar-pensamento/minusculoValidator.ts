import { AbstractControl } from '@angular/forms';

export function lowerValidator(control: AbstractControl) {
  const autoria = control.value as string;
  if (autoria !== autoria?.toLowerCase()) {
    return { minusculo: true };
  } else return null;
}

import { SimulateDatabase } from './../../../../../../../.common/classes/similate-database';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ManageClientsService } from '../../../_root/services/manage-clients.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './signup-client.component.html',
  styleUrls: ['./../../../../static-resources/styles/client-forms.scss']
})
export class SignupClientComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
      private _manageClients: ManageClientsService,
      private _router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.validateUsername.bind(this)]),
      password1: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password2: new FormControl(null, [Validators.required, this.validatePassword.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required)
    });
  }

  validateUsername(control: FormControl): {[ key: string ]: any } {
    if (this._manageClients.verifyAdminUsername(control.value)) {
      return {
        'forbiddenUsername' : true
      };
    } else {
      if (!this._manageClients.verifyUsername(control.value)) {
        return {
          'usernameAlreadyExists': true
        };
      }
    }
    return null;
  }

  validatePassword(control: FormControl): { [key: string]: any } {
    if (this.signUpForm) {
      if (this.signUpForm.get('password1').value !== control.value) {
        return {
          'passwordMissMatch': true
        };
      }
    }
    return null;
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this._manageClients.addClient({
        clientId: SimulateDatabase.generateUniqueId(25),
        username: this.signUpForm.value.username as string,
        password: this.signUpForm.value.password1 as string,
        email: this.signUpForm.value.email as string,
        phone: this.signUpForm.value.phone as string,
        isActive: true
      });
      this.signUpForm.reset();
      this._router.navigate(['/login']);
    }
  }

}

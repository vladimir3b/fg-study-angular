import { IClientModel } from './../../../../models/client.model';
import { ManageClientsService } from './../../../_root/services/manage-clients.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fg-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./../../../../static-resources/styles/client-forms.scss']
})
export class EditClientComponent implements OnInit {
  client: IClientModel;
  editClientForm: FormGroup;
  editClientPasswordForm: FormGroup;
  get clientDeactivated(): boolean {
    return !(this._manageClients.loggedClient.isActive);
  }
  constructor(private _manageClients: ManageClientsService) {
  }

  ngOnInit() {
    this.client = this._manageClients.loggedClient;
    this.editClientForm = new FormGroup({
      username: new FormControl(this.client.username, [Validators.required, this.validateUsername.bind(this)]),
      email: new FormControl(this.client.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.client.phone, Validators.required)
    });
    this.editClientPasswordForm = new FormGroup({
      password: new FormControl(null, [Validators.required, this.validateOldPassword.bind(this)]),
      password1: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password2: new FormControl(null, [Validators.required, this.validateChangedPassword.bind(this)]),
    });
  }

  validateUsername(control: FormControl): { [key: string]: any } {
    if (this._manageClients.verifyAdminUsername(control.value)) {
      return {
        'forbiddenUsername': true
      };
    } else {
      if (!this._manageClients.verifyUsername(control.value, this.client.clientId)) {
        return {
          'usernameAlreadyExists': true
        };
      }
    }
    return null;
  }

  validateOldPassword(control: FormControl): { [key: string]: any } {
    if (this.client.password !== control.value) {
      return {
        'wrongPassword': true
      };
    }
    return null;
  }

  validateChangedPassword(control: FormControl): { [key: string]: any } {
    if (this.editClientPasswordForm) {
      if (this.editClientPasswordForm.get('password1').value !== control.value) {
        return {
          'passwordMissMatch': true
        };
      }
    }
    return null;
  }

  onDeactivateClient(clientId: string) {
    this._manageClients.updateClient({
      ...this.client,
      isActive: false
    });
    this.client = this._manageClients.loggedClient; // Update client data. I could resolve this more elegant with an observable but...
    this._manageClients.logOut();
  }

  onActivateClient(clientId: string) {
    this._manageClients.updateClient({
      ...this.client,
      isActive: true
    });
    this.client = this._manageClients.loggedClient; // Update client data. I could resolve this more elegant with an observable but...
  }

  onSubmitClientForm(): void {
    if (this.editClientForm.valid) {
      this._manageClients.updateClient({
        ...this.client,
        username: this.editClientForm.value.username,
        email: this.editClientForm.value.email,
        phone: this.editClientForm.value.phone,
      });
      this.client = this._manageClients.loggedClient;
    }
  }

  onSubmitClientPasswordForm(): void {
    if (this.editClientPasswordForm.valid) {
      this._manageClients.updateClient({
        ...this.client,
        password: this.editClientPasswordForm.value.password1
      });
      this.client = this._manageClients.loggedClient;
      this.editClientPasswordForm.reset(); // this doesn't work as expected, the form will show errors
    }
  }

}

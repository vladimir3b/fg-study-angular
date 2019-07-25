import { IClientModel } from './../../../../models/client.model';
import { Router } from '@angular/router';
import { ManageClientsService } from './../../../_root/services/manage-clients.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: [ './../../../../static-resources/styles/client-forms.scss']
})
export class LoginComponent implements OnInit {
  loginError = false;
  loginForm: FormGroup;
  constructor(
        private _manageClients: ManageClientsService,
        private _router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onRetryLogin() {
    this.loginForm.reset();
    this.loginError = false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const logged = this._manageClients.login(this.loginForm.value.username, this.loginForm.value.password);
      if (logged) {
        this._router.navigate(['']);
      } else {
        this.loginError = true;
      }
    }
  }

}

import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';
import { UserSessionService } from './services/user-session.service';
import { NgModule } from '@angular/core';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { LoginErrorComponent } from './components/login-error/login-error.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';

@NgModule({
  declarations: [
    EditClientComponent,
    LoginComponent,
    LoginErrorComponent,
    SignupClientComponent
  ],
  imports: [
    CommonModulesModule,
  ],
  providers: [
    UserSessionService
  ]
})
export class ClientModule { }

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ForgotPasswordComponent } from './login-screen/forgot-password/forgot-password.component';
import { NewUserComponent } from './login-screen/new-user/new-user.component';
import { AddGroupPopupComponent } from './pages/UserGroups/add-group-popup/add-group-popup.component';

import {MatDialogModule} from '@angular/material/dialog';
import { AddUserPopupComponent } from './pages/user/add-user-popup/add-user-popup.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginScreenComponent, ForgotPasswordComponent, NewUserComponent, AddGroupPopupComponent, AddUserPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

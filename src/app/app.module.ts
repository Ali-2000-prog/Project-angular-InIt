import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpResponse } from "@angular/common/http";
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
import {MatIconModule} from '@angular/material/icon';

import { AddUserPopupComponent } from './pages/user/add-user-popup/add-user-popup.component';
import { UserApiService } from "./Services/user-api.service";
import { GroupApiService } from "./Services/group-api.services";
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ChangePasswordLoginComponent } from './login-screen/change-password-login/change-password-login.component';
import { DialogService } from "./Services/Mat-dialogServices/dialog.service.ts.service";
import { MatConfirmDialogComponent } from './ExtensionsTemplates/mat-confirm-dialog/mat-confirm-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { UpdateGroupPopupComponent } from './pages/UserGroups/update-group-popup/update-group-popup.component';
import { UpdateUserPopupComponent } from './pages/user/update-user-popup/update-user-popup.component'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent, 
    LoginScreenComponent, 
    ForgotPasswordComponent, 
    NewUserComponent, 
    AddGroupPopupComponent, 
    AddUserPopupComponent, 
    UserProfileComponent, 
    ChangePasswordComponent, 
    ChangePasswordLoginComponent, 
    MatConfirmDialogComponent, UpdateGroupPopupComponent, UpdateUserPopupComponent],
  providers: [UserApiService,GroupApiService,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { ForgotPasswordComponent } from "./login-screen/forgot-password/forgot-password.component";
import { NewUserComponent } from "./login-screen/new-user/new-user.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";

const routes: Routes = [
  {path:"", component:LoginScreenComponent},
  {path:"ForgotPassword", component:ForgotPasswordComponent},
  {path:"NewUser", component:NewUserComponent},
  // {path:"ChangePassword",component:ChangePasswordComponent},
  

  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, 
  //{
  //   path: "",
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
  //     }
  //   ]
  // },
  // {
  //   path: "**",
  //   redirectTo: "dashboard"
  // }

  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

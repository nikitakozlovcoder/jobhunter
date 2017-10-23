import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ListComponent} from "./list/list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'list/:id', component: ListComponent},
    { path: '**', component: NotFoundComponent }
];

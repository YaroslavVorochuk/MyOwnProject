import {Routes} from '@angular/router'
import { BagComponent } from './bag/bag.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

export const myRoutes: Routes = [
    {path: "bag", component: BagComponent},
    {path: "main", component: MainComponent},
    {path: "", component: MainComponent},
    {path: "login", component: LoginComponent},
]
import { Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'subscription', component: SubscriptionComponent},
    { path: 'userarea', component: UserAreaComponent},
];

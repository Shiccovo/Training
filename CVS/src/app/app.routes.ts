import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {path:'directory',component:DirectoryComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',redirectTo:'directory'}
];

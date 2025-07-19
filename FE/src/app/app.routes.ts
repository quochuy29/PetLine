import { Routes } from '@angular/router';
import { PetComponent } from './components/pet/pet.component';
import { YourPetComponent } from './components/your-pet/your-pet.component';
import { CategoryPetComponent } from './components/category-pet/category-pet.component';
import { AccessoryComponent } from './components/accessory/accessory.component';
import { ServiceComponent } from './components/service/service.component';

export const routes: Routes = [
    { path: 'pet', component: PetComponent },
    { path: 'your-pet', component: YourPetComponent },
    { path: 'category-pet', component: CategoryPetComponent },
    { path: 'accessory', component: AccessoryComponent },
    { path: 'service', component: ServiceComponent }
];

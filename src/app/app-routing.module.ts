import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallTypeSelectionPageComponent } from './components/pages/install-type-selection-page/install-type-selection-page.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';

export const routes: Routes = [
  {
    path: WelcomePageComponent.PATH,
    component: WelcomePageComponent
  },
  {
    path: InstallTypeSelectionPageComponent.PATH,
    component: InstallTypeSelectionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

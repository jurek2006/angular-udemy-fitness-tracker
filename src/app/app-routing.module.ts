import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
// import { TrainingModule } from './training/training.module';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'training',
    // loadChildren: () => TrainingModule
    loadChildren: './training/training.module#TrainingModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

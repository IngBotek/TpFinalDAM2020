import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsriegosPage } from './logsriegos.page';

const routes: Routes = [
  {
    path: '',
    component: LogsriegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsriegosPageRoutingModule {}

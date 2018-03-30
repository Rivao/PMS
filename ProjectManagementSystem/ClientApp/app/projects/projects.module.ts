import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeProjects } from './home/home.projects';

import { AppModuleShared } from '../app.shared.module';
@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeProjects,
  ],
  exports: [
    HomeProjects,
  ]

})
export class ProjectsModule {}
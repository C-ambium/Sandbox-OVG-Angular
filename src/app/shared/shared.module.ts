import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { PipesModule } from './pipes/pipes.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    ToolbarModule,
    CommonModule,
    MaterialModule,
    PipesModule
  ],
  exports : [
    LoaderComponent,
    ToolbarModule,
    MaterialModule,
    PipesModule
  ]
})
export class SharedModule { }

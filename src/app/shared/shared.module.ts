import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { PaginatorModule } from './paginator/paginator.module';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    ToolbarModule,
    PaginatorModule,
    CommonModule
  ],
  exports : [
    LoaderComponent,
    ToolbarModule,
    PaginatorModule
  ]
})
export class SharedModule { }

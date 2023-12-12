import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxLoadingComponent } from './ngx-loading.component';
import { INgxLoadingConfig } from './ngx-loading-config';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxLoadingComponent],
  imports: [CommonModule],
  exports: [NgxLoadingComponent],
})
export class NgxLoadingModule {
  static forRoot(
    loadingConfig: INgxLoadingConfig
  ): ModuleWithProviders<NgxLoadingModule> {
    return {
      ngModule: NgxLoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }],
    };
  }
}

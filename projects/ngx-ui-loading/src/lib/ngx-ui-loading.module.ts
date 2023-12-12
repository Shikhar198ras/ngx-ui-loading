import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxUILoadingComponent } from './ngx-ui-loading.component';
import { INgxUILoadingConfig } from './ngx-ui-loading-config';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxUILoadingComponent],
  imports: [CommonModule],
  exports: [NgxUILoadingComponent],
})
export class NgxUILoadingModule {
  static forRoot(
    loadingConfig: INgxUILoadingConfig
  ): ModuleWithProviders<NgxUILoadingModule> {
    return {
      ngModule: NgxUILoadingModule,
      providers: [{ provide: 'loadingConfig', useValue: loadingConfig }],
    };
  }
}

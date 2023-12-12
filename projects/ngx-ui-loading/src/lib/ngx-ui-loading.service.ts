import { Inject, Injectable, Optional } from '@angular/core';
import { INgxUILoadingConfig, NgxUILoadingConfig } from './ngx-ui-loading-config';

@Injectable({
  providedIn: 'root'
})
export class NgxUILoadingService {
  public loadingConfig: INgxUILoadingConfig;

  constructor(
    @Optional() @Inject('loadingConfig') private config: INgxUILoadingConfig
  ) {
    this.loadingConfig = this.config || new NgxUILoadingConfig();
  }
}

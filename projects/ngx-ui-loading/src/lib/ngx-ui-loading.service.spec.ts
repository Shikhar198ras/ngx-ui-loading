import { TestBed } from '@angular/core/testing';
import {
  ngxUILoadingAnimationTypes,
  NgxUILoadingConfig,
} from './ngx-ui-loading-config';
import { NgxUILoadingService } from './ngx-ui-loading.service';

describe('NgxUILoadingService', () => {
  let service: NgxUILoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUILoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use a default NgxUILoadingConfig', () => {
    const ngxUILoadingConfig = new NgxUILoadingConfig();
    expect(service.loadingConfig).toEqual(ngxUILoadingConfig);
  });

  it('should use a custom NgxUILoadingConfig when initialised with one', () => {
    const ngxUILoadingConfig = new NgxUILoadingConfig();
    ngxUILoadingConfig.animationType = ngxUILoadingAnimationTypes.cubeGrid;
    ngxUILoadingConfig.backdropBackgroundColour = '#ffffff';
    ngxUILoadingConfig.backdropBorderRadius = '1px';
    ngxUILoadingConfig.fullScreenBackdrop = true;
    ngxUILoadingConfig.primaryColour = '#00ffff';
    ngxUILoadingConfig.secondaryColour = '#ff00ff';
    ngxUILoadingConfig.tertiaryColour = '#ffff00';
    service = new NgxUILoadingService(ngxUILoadingConfig);
    expect(service.loadingConfig).toEqual(ngxUILoadingConfig);
  });
});
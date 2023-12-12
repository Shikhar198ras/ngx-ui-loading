import type { DebugElement } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ngxUILoadingAnimationTypes,
  NgxUILoadingConfig,
} from './ngx-ui-loading-config';
import { NgxUILoadingComponent } from './ngx-ui-loading.component';
import { NgxUILoadingService } from './ngx-ui-loading.service';

let ngxLoadingServiceStub: Partial<NgxUILoadingService>;

describe('NgxUILoadingComponent', () => {
  let component: NgxUILoadingComponent;
  let fixture: ComponentFixture<NgxUILoadingComponent>;

  beforeEach(async () => {
    // stub NgxUILoadingService for test purposes
    ngxLoadingServiceStub = {
      loadingConfig: new NgxUILoadingConfig(),
    };

    await TestBed.configureTestingModule({
      declarations: [NgxUILoadingComponent],
      providers: [
        { provide: NgxUILoadingService, useValue: ngxLoadingServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUILoadingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    expect(component.show).toBe(false);
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.backdrop'))).toBeFalsy();
  });

  it('should show loading screen when show is set to true', () => {
    component.show = true;
    expect(component.show).toBe(true);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.backdrop'))).toBeTruthy();
  });

  it('should show the three bounce animation by default once show set to true', () => {
    component.show = true;
    expect(component.show).toBe(true);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.spinner-three-bounce'))).toBeTruthy();
  });

  it('should show the correct animation when set once show set to true', () => {
    [
      {
        animation: ngxUILoadingAnimationTypes.threeBounce,
        expectedClass: '.spinner-three-bounce',
      },
      {
        animation: ngxUILoadingAnimationTypes.chasingDots,
        expectedClass: '.spinner-chasing-dots',
      },
      {
        animation: ngxUILoadingAnimationTypes.circle,
        expectedClass: '.spinner-circle',
      },
      {
        animation: ngxUILoadingAnimationTypes.circleSwish,
        expectedClass: '.spinner-circle-swish',
      },
      {
        animation: ngxUILoadingAnimationTypes.cubeGrid,
        expectedClass: '.sk-cube-grid',
      },
      {
        animation: ngxUILoadingAnimationTypes.doubleBounce,
        expectedClass: '.spinner-double-bounce',
      },
      {
        animation: ngxUILoadingAnimationTypes.none,
        expectedClass: '.backdrop',
      },
      {
        animation: ngxUILoadingAnimationTypes.pulse,
        expectedClass: '.spinner-pulse',
      },
      {
        animation: ngxUILoadingAnimationTypes.rectangleBounce,
        expectedClass: '.spinner-rectangle-bounce',
      },
      {
        animation: ngxUILoadingAnimationTypes.rotatingPlane,
        expectedClass: '.spinner-sk-rotateplane',
      },
      {
        animation: ngxUILoadingAnimationTypes.wanderingCubes,
        expectedClass: '.spinner-wandering-cubes',
      },
    ].forEach(({ animation, expectedClass }) => {
      const config = new NgxUILoadingConfig();
      config.animationType = animation;
      component.config = config;
      component.show = true;
      expect(component.show).toBe(true);
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement;
      expect(debugElement.query(By.css(expectedClass))).toBeTruthy();
    });
  });

  it('should show the correct animation when set at the service level and show set to true', () => {
    [
      {
        animation: ngxUILoadingAnimationTypes.threeBounce,
        expectedClass: '.spinner-three-bounce',
      },
      {
        animation: ngxUILoadingAnimationTypes.chasingDots,
        expectedClass: '.spinner-chasing-dots',
      },
      {
        animation: ngxUILoadingAnimationTypes.circle,
        expectedClass: '.spinner-circle',
      },
      {
        animation: ngxUILoadingAnimationTypes.circleSwish,
        expectedClass: '.spinner-circle-swish',
      },
      {
        animation: ngxUILoadingAnimationTypes.cubeGrid,
        expectedClass: '.sk-cube-grid',
      },
      {
        animation: ngxUILoadingAnimationTypes.doubleBounce,
        expectedClass: '.spinner-double-bounce',
      },
      {
        animation: ngxUILoadingAnimationTypes.none,
        expectedClass: '.backdrop',
      },
      {
        animation: ngxUILoadingAnimationTypes.pulse,
        expectedClass: '.spinner-pulse',
      },
      {
        animation: ngxUILoadingAnimationTypes.rectangleBounce,
        expectedClass: '.spinner-rectangle-bounce',
      },
      {
        animation: ngxUILoadingAnimationTypes.rotatingPlane,
        expectedClass: '.spinner-sk-rotateplane',
      },
      {
        animation: ngxUILoadingAnimationTypes.wanderingCubes,
        expectedClass: '.spinner-wandering-cubes',
      },
    ].forEach(({ animation, expectedClass }) => {
      const ngxLoadingService = TestBed.inject(NgxUILoadingService);
      const ngxLoadingConfig = new NgxUILoadingConfig();
      ngxLoadingConfig.animationType = animation;
      ngxLoadingConfig.backdropBackgroundColour = '#ffffff';
      ngxLoadingConfig.backdropBorderRadius = '1px';
      ngxLoadingConfig.fullScreenBackdrop = true;
      ngxLoadingConfig.primaryColour = '#00ffff';
      ngxLoadingConfig.secondaryColour = '#ff00ff';
      ngxLoadingConfig.tertiaryColour = '#ffff00';

      ngxLoadingService.loadingConfig = ngxLoadingConfig;

      fixture = TestBed.createComponent(NgxUILoadingComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();

      component.show = true;
      expect(component.show).toBe(true);
      fixture.detectChanges();
      const debugElement: DebugElement = fixture.debugElement;
      expect(component.config.animationType).toEqual(
        ngxLoadingConfig.animationType
      );
      expect(component.config.backdropBackgroundColour).toEqual(
        ngxLoadingConfig.backdropBackgroundColour
      );
      expect(component.config.backdropBorderRadius).toEqual(
        ngxLoadingConfig.backdropBorderRadius
      );
      expect(component.config.fullScreenBackdrop).toEqual(
        ngxLoadingConfig.fullScreenBackdrop
      );
      expect(component.config.primaryColour).toEqual(
        ngxLoadingConfig.primaryColour
      );
      expect(component.config.secondaryColour).toEqual(
        ngxLoadingConfig.secondaryColour
      );
      expect(component.config.tertiaryColour).toEqual(
        ngxLoadingConfig.tertiaryColour
      );
      expect(debugElement.query(By.css(expectedClass))).toBeTruthy();
    });
  });
});
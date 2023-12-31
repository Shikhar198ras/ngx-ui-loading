export interface INgxUILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;
  }
  
  export class NgxUILoadingConfig implements INgxUILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;
  
    constructor(config: INgxUILoadingConfig = {}) {
      this.backdropBorderRadius = config.backdropBorderRadius;
      this.backdropBackgroundColour = config.backdropBackgroundColour;
      this.fullScreenBackdrop = config.fullScreenBackdrop;
      this.animationType = config.animationType;
      this.primaryColour = config.primaryColour;
      this.secondaryColour = config.secondaryColour;
      this.tertiaryColour = config.tertiaryColour;
    }
  }
  
  export const ngxUILoadingAnimationTypes = {
    chasingDots: 'chasing-dots',
    circle: 'sk-circle',
    circleSwish: 'circleSwish',
    cubeGrid: 'sk-cube-grid',
    doubleBounce: 'double-bounce',
    none: 'none',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rotatingPlane: 'rotating-plane',
    threeBounce: 'three-bounce',
    wanderingCubes: 'wandering-cubes',
  };
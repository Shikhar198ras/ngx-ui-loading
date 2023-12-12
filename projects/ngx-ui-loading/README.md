# ngx-ui-loading

A customisable loading spinner for Angular applications.

[![npm version](https://badge.fury.io/js/ngx-ui-loading.svg)](https://badge.fury.io/js/ngx-ui-loading)
[![Monthly Downloads](https://img.shields.io/npm/dm/ngx-ui-loading)]()

![ngx-ui-loading](https://cloud.githubusercontent.com/assets/26901242/25317405/05a1ce4a-2870-11e7-8693-ed2394b54cba.gif)

## Table of contents

1. [Installation](#installation)
2. [Getting started](#getting-started)
3. [Input parameters](#input-parameters)
4. [Config options](#config-options)

## Installation

Install ngx-ui-loading via NPM, using the command below.

### NPM

```shell
npm install --save ngx-ui-loading
```

## Getting started

Import the `NgxUILoadingModule` in your root application module:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { NgxUILoadingModule } from "ngx-ui-loading";

@NgModule({
  //...
  imports: [
    //...
    NgxUILoadingModule.forRoot({}),
  ],
  //...
})
export class AppModule {}
```

You must create a boolean variable (e.g. `loading` below) that is accessible from the component which will contain ngx-ui-loading. This boolean is used as an input into ngx-ui-loading, and will determine when the loading spinner is visible.

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  //...
})
export class AppComponent implements OnInit {
  //...
  public loading = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  Login() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(
      (res) => {
        this.loading = false;
        //...
      },
      (err) => {
        this.loading = false;
        //...
      }
    );
  }
}
```

Next, add the ngx-ui-loading component selector to your application component's template. Set the `[show]` input variable of ngx-ui-loading to point to your boolean, which will determine when ngx-ui-loading is visible. Optionally set the `[config]` input variable of ngx-ui-loading to setup custom configuration options. If the `[config]` input variable is not set, the globally configured configuration will be used, if set. If no config options are set, the ngx-ui-loading default config options will be used. See [Config options](#config-options) for further information.

You can also optionally define a `[template]` input variable, which can be used to inject your own custom templates into the component.

NOTE: ngx-ui-loading will fill the entirety of its parent component. If you wish for ngx-ui-loading to only fill a specific element within your component, ensure that ngx-ui-loading is a child element of that element, and that the containing element has its `position` attribute set to `relative`.

```html
<div class="my-container">
  <ng-template #customLoadingTemplate>
    <div class="custom-class">
      <h3>Loading...</h3>
      <button (click)="showAlert()">Click me!</button>
    </div>
  </ng-template>

  <ngx-ui-loading
    [show]="loading"
    [config]="{ backdropBorderRadius: '3px' }"
    [template]="customLoadingTemplate"
  ></ngx-ui-loading>
  //...
</div>
```

## Input parameters

| Input    | Required | Details                                                                                                                                                                                                                                                         |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| show     | Required | A boolean, which will determine when ngx-ui-loading is visible.                                                                                                                                                                                                    |
| config   | Optional | A set of configuration options for ngx-ui-loading. If this is not specified, the globally configured configuration will be used, if set. If no config options are set, the ngx-ui-loading default config options will be used. See [Config options](#config-options). |
| template | Optional | A TemplateRef, which will be displayed within the ngx-ui-loading component. Use this to inject your own custom templates into the component.                                                                                                                       |

## Config options

| Option                   | Required | Default                              | Details                                                                                                         |
| ------------------------ | -------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| animationType            | Optional | ngxUILoadingAnimationTypes.threeBounce| The animation to be used within ngx-ui-loading. Use the ngxUILoadingAnimationTypes constant to select valid options. |
| backdropBorderRadius     | Optional | 0                                    | The border-radius to be applied to the ngx-ui-loading backdrop, e.g. '14px'.                                       |
| backdropBackgroundColour | Optional | rgba(0, 0, 0, 0.3)                   | The background-color to be applied to the ngx-ui-loading backdrop, e.g. 'rgba(255, 255, 255, 0.2)'.                |
| fullScreenBackdrop       | Optional | false                                | Set to true to make the backdrop full screen, with the loading animation centered in the middle of the screen.  |
| primaryColour            | Optional | #ffffff                              | The primary colour, which will be applied to the ngx-ui-loading animation.                                         |
| secondaryColour          | Optional | #ffffff                              | The secondary colour, which will be applied to the ngx-ui-loading animation (where appropriate).                   |
| tertiaryColour           | Optional | #ffffff                              | The tertiary colour, which will be applied to the ngx-ui-loading animation (where appropriate).                    |

Config options can be set globally (using the `.forRoot() module import statement`), as well as being passed into each ngx-ui-loading instance, if required. Config options that are passed into an ngx-ui-loading element will override any custom global config options that have been set. A combination of the two can be used together if appropriate. If no config is set, the default ngx-ui-loading config options will be used. Please see below for an example custom configuration setup, using both global and local configurations.

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-ui-loading";

@NgModule({
  //...
  imports: [
    //...
    NgxUILoadingModule.forRoot({
      animationType: ngxUILoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ],
  //...
})
export class AppModule {}
```

```html
<div class="my-container">
  <ng-template #customLoadingTemplate>
    <div class="custom-class">
      <h3>Loading...</h3>
      <button (click)="showAlert()">Click me!</button>
    </div>
  </ng-template>

  <ngx-ui-loading
    [show]="loading"
    [config]="{ animationType: ngxUILoadingAnimationTypes.rectangleBounce,
        backdropBackgroundColour: 'rgba(255,255,255,0.3)', backdropBorderRadius: '10px',
        primaryColour: '#ffffff', secondaryColour: '#ffffff', tertiaryColour: '#ffffff' }"
    [template]="customLoadingTemplate"
  ></ngx-ui-loading>
  //...
</div>
```
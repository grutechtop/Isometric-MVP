import React, { forwardRef } from "react";
import type PIXI from "pixi.js";
import { PixiComponent, useApp } from "@pixi/react";
import { Viewport } from "pixi-viewport";
import { EventSystem } from "@pixi/events";

export interface ViewportProps {
  screenWidth?: number;
  screenHeight?: number;
  worldWidth?: number;
  worldHeight?: number;
  viewportPlugins?: ("drag" | "pinch" | "wheel" | "decelerate")[];
  children?: React.ReactNode;
}

export interface PixiViewportComponentProps extends ViewportProps {
  app: PIXI.Application;
}

const PixiViewportComponent = PixiComponent<
  PixiViewportComponentProps,
  Viewport
>("Viewport", {
  create: ({ app, ...viewportProps }) => {
    const events = new EventSystem(app.renderer);
    events.domElement = app.renderer.view as unknown as HTMLElement;
    app.renderer.background.alpha = 0;

    const viewport = new Viewport({
      ticker: app.ticker,
      events,
      ...viewportProps,
    });
    viewport.scale.x = 1.8;
    viewport.scale.y = 1.8;
    viewport
      .drag({
        clampWheel: true,
      })
      .wheel({
        percent: 0.1,
        trackpadPinch: true,
      })
      .clamp({ direction: "all" })
      .decelerate()
      .clampZoom({
        // minScale: 1.4,
        maxScale: 5,
      });

    return viewport;
  },

  willUnmount: (viewport: Viewport) => {
    viewport.options.noTicker = true;
    viewport.destroy({ children: true, texture: true, baseTexture: true });
  },
});

export const PixiViewport = forwardRef<Viewport, ViewportProps>(
  function MyViewport(props, ref) {
    return <PixiViewportComponent ref={ref} app={useApp()} {...props} />;
  }
);

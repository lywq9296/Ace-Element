import type { App } from 'vue';

export const withInstall = (component: any) => {
  component.install = (app: App<Element>) => {
    app.component(component.name, component);
  };

  return component;
};

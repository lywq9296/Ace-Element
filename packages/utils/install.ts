export const componentInstall = (component) => {
  component.install = (app) => {
    app.component(component.name, component);
  };

  return component;
};

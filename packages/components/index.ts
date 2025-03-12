import type { App, defineComponent } from 'vue';
import * as components from './components';
import type { Install } from './types';

import '@Ace-Element/theme';

export const install: Install<App<Element>> = (app) => {
  if (install.installed) {
    return;
  }

  Object.keys(components).forEach((key) => {
    const c = (
      components as Record<string, ReturnType<typeof defineComponent>>
    )[key];
    app.component(c.name, c);
  });

  install.installed = true;
};
install.installed = false;

export * from './Button';

export * from './Collapse';

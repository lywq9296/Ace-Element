export * from './Button';

import type { App } from 'vue';
import components from './components';
import type { Install } from './types';

import '@Vue3-Element/theme';

export const install: Install<App<Element>> = (app) => {
  if (install.installed) {
    return;
  }

  components.forEach((c) => app.use(c));
  install.installed = true;
};
install.installed = false;

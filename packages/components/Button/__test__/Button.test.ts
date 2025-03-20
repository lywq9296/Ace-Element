import { describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/index.vue';

describe('Button.vue', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        default: 'button',
      },
    });

    console.log(wrapper.html());
  });
});

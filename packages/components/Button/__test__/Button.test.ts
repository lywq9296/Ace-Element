import { describe, test, expect } from 'vitest';
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
    // class
    expect(wrapper.classes()).toContain('ace-button--primary');

    // slot
    // 获取元素:get, find
    expect(wrapper.get('button').text()).toBe('button');

    // 事件
    wrapper.get('button').trigger('click');
    console.log(wrapper.emitted());
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  test('disabled button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        disabled: true,
      },
      slots: {
        default: 'disabled button',
      },
    });
    console.log(wrapper.html());

    // attributes
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.find('button').element.disabled).toBeDefined();

    // 事件
    wrapper.get('button').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});

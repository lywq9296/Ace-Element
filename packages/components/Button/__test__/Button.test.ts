import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Button from '../src/index.vue';
import { FontAwesomeIcon } from '@Ace-Element/icon';
import { AceIcon } from '../../Icon';

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
    // 获取元素:get, find, 入参传 css 类名
    expect(wrapper.get(/* css 类名 */ 'button').text()).toBe('button');

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

  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up',
      },
      slots: {
        default: 'icon',
      },
      global: {
        stubs: ['FontAwesomeIcon'],

        /* 
          添加 stubs: ['FontAwesomeIcon'], 前
          <button class="ace-button" type="button">
            <!--v-if--><i class="ace-icon"><svg class="svg-inline--fa fa-arrow-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path class="" fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg></i><span>icon</span>
          </button>

          添加 stubs: ['FontAwesomeIcon'], 后
          <button class="ace-button" type="button">
            <!--v-if--><i class="ace-icon">
              <font-awesome-icon-stub icon="arrow-up" border="false" fixedwidth="false" flip="false" listitem="false" pulse="false" swapopacity="false" spin="false" symbol="false" inverse="false" bounce="false" shake="false" beat="false" fade="false" beatfade="false" flash="false" spinpulse="false" spinreverse="false"></font-awesome-icon-stub>
            </i><span>icon</span>
          </button>
        */
      },
    });
    console.log(wrapper.html());

    // const iconComponent = wrapper.getComponent(FontAwesomeIcon);
    const iconComponent = wrapper.findComponent(FontAwesomeIcon);
    /*
      iconComponent 指的就是
      <font-awesome-icon-stub icon="arrow-up" border="false" fixedwidth="false" flip="false" listitem="false" pulse="false" swapopacity="false" spin="false" symbol="false" inverse="false" bounce="false" shake="false" beat="false" fade="false" beatfade="false" flash="false" spinpulse="false" spinreverse="false"></font-awesome-icon-stub>
    */
    expect(iconComponent.exists()).toBe(true);
    expect(iconComponent.attributes('icon')).toBe('arrow-up');
  });

  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'loading',
      },
      global: {
        stubs: ['AceIcon'],
      },
    });
    console.log(wrapper.html());
    /*
      <button class="ace-button is-loading" disabled="" type="button">
        <ace-icon-stub icon="spinner" border="false" fixedwidth="false" listitem="false" pulse="false" swapopacity="false" spin="true" symbol="false" inverse="false" bounce="false" shake="false" beat="false" fade="false" beatfade="false" spinpulse="false" spinreverse="false"></ace-icon-stub>
        <!--v-if--><span>loading</span>
      </button>
     */

    const iconComponent = wrapper.findComponent(AceIcon);

    expect(iconComponent.exists()).toBe(true);
    expect(iconComponent.attributes('icon')).toBe('spinner');

    expect(wrapper.attributes('disabled')).toBeDefined();
  });
});

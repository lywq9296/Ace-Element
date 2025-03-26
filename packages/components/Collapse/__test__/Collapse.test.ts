import { describe, expect, test } from 'vitest';
import { AceCollapse, AceCollapseItem } from '../index';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

describe('Collapse.vue', () => {
  test('basic collapse', async () => {
    const wrapper = mount(AceCollapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: () => [
          h(
            AceCollapseItem,
            {
              name: 'a',
              title: 'Title A',
            },
            'content a'
          ),
          h(
            AceCollapseItem,
            {
              name: 'b',
              title: 'Title B',
            },
            'content b'
          ),
          h(
            AceCollapseItem,
            { name: 'c', title: 'Title C', disabled: true },
            'content c'
          ),
        ],
        // '<ace-collapse-item name="a" title="Title A">content a</ace-collapse-item>',
      },
      global: {
        stubs: ['AceIcon'],
      },
      attachTo: document.body,
    });

    // 长度
    const headerList = wrapper.findAll('.ace-collapse-item__header');
    const contentList = wrapper.findAll('.ace-collapse-item__content');
    expect(headerList.length).toBe(3);
    expect(contentList.length).toBe(3);

    // 文本
    const firstHeader = headerList[0];
    expect(firstHeader.text()).toBe('Title A');

    // 内容
    const firstContent = contentList[0];
    expect(firstContent.isVisible()).toBeTruthy();
    expect(firstContent.text()).toBe('content a');

    const secondContent = contentList[1];
    expect(secondContent.isVisible()).toBeFalsy();
    expect(secondContent.text()).toBe('content b');

    // 点击行为
    await firstHeader.trigger('click');
    expect(firstContent.isVisible()).toBeFalsy();

    const secondHeader = headerList[1];
    await secondHeader.trigger('click');
    expect(secondContent.isVisible()).toBeTruthy();

    // disabled
    const thirdHeader = headerList[2];
    expect(thirdHeader.classes()).toContain('is-disabled');
    await thirdHeader.trigger('click');
    const thirdContent = contentList[2];
    expect(thirdContent.isVisible()).toBeFalsy();
  });
});

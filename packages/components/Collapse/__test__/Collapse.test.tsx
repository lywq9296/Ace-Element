import { describe, expect, test } from 'vitest';
import { AceCollapse, AceCollapseItem } from '../index';
import { mount } from '@vue/test-utils';

describe('Collapse.vue', () => {
  test('basic collapse', async () => {
    const wrapper = mount(
      () => (
        <AceCollapse modelValue={['a']}>
          <AceCollapseItem name="a" title="Title A">
            content a
          </AceCollapseItem>
          <AceCollapseItem name="b" title="Title B">
            content b
          </AceCollapseItem>
          <AceCollapseItem name="c" title="Title C" disabled>
            content c
          </AceCollapseItem>
        </AceCollapse>
      ),
      {
        global: {
          stubs: ['AceIcon'],
        },
        attachTo: document.body,
      }
    );
    // console.log(wrapper.html());
    const headers = wrapper.findAll('.ace-collapse-item__header');
    const contents = wrapper.findAll('.ace-collapse-item__content');

    // 长度
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);

    // 文本
    const firstHeader = headers[0];
    expect(firstHeader.text()).toBe('Title A');

    // 内容
    const firstContent = contents[0];
    expect(firstContent.isVisible()).toBe(true);
    expect(firstContent.text()).toBe('content a');

    const secondContent = contents[1];
    expect(secondContent.isVisible()).toBe(false);

    // 点击行为
    await firstHeader.trigger('click');
    expect(firstContent.isVisible()).toBe(false); // attachTo: document.body 解决

    const secondHeader = headers[1];
    await secondHeader.trigger('click');
    expect(secondContent.isVisible()).toBe(true);

    // disable
    const disableHeader = headers[2];
    expect(disableHeader.classes()).toContain('is-disabled');
    await disableHeader.trigger('click');
    const disableContent = contents[2];
    expect(disableContent.isVisible()).toBe(false);
  });
});

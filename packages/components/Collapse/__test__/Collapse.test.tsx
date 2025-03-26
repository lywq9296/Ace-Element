import { beforeAll, describe, expect, test, vi } from 'vitest';
import { AceCollapse, AceCollapseItem } from '../index';
import { mount } from '@vue/test-utils';
import type { DOMWrapper, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper;
let headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[];

let firstHeader: DOMWrapper<Element>, firstContent: DOMWrapper<Element>;
let secondHeader: DOMWrapper<Element>, secondContent: DOMWrapper<Element>;
let disableHeader: DOMWrapper<Element>, disableContent: DOMWrapper<Element>;

const onChange = vi.fn();

describe('Collapse.vue', () => {
  beforeAll(() => {
    wrapper = wrapper = mount(
      () => (
        <AceCollapse modelValue={['a']} onChange={onChange}>
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

    headers = wrapper.findAll('.ace-collapse-item__header');
    contents = wrapper.findAll('.ace-collapse-item__content');
  });

  test('测试基础结构及对应文本', async () => {
    // 长度
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);

    // 文本
    firstHeader = headers[0];
    expect(firstHeader.text()).toBe('Title A');

    // 内容
    firstContent = contents[0];
    expect(firstContent.isVisible()).toBe(true);
    expect(firstContent.text()).toBe('content a');

    secondContent = contents[1];
    expect(secondContent.isVisible()).toBe(false);
  });

  test('点击标题展开/关闭内容', async () => {
    // 点击行为
    firstHeader = headers[0];
    await firstHeader.trigger('click');

    firstContent = contents[0];
    expect(firstContent.isVisible()).toBe(false); // attachTo: document.body 解决

    secondHeader = headers[1];
    await secondHeader.trigger('click');
    expect(secondContent.isVisible()).toBe(true);
  });

  test('发送事件', async () => {
    expect(onChange).toBeCalledTimes(2);

    expect(onChange).toBeCalledWith([]);

    expect(onChange).toHaveBeenLastCalledWith(['b']);
  });

  test('disabled的内容', async () => {
    onChange.mockClear();

    disableHeader = headers[2];
    expect(disableHeader.classes()).toContain('is-disabled');

    await disableHeader.trigger('click');

    disableContent = contents[2];
    expect(disableContent.isVisible()).toBe(false);

    expect(onChange).not.toHaveBeenCalled();
  });

  /* test('basic collapse', async () => {
    const onChange = vi.fn();

    const wrapper = mount(
      () => (
        <AceCollapse modelValue={['a']} onChange={onChange}>
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
    expect(onChange).toBeCalledWith([]);

    const secondHeader = headers[1];
    await secondHeader.trigger('click');
    expect(secondContent.isVisible()).toBe(true);
    expect(onChange).toHaveBeenLastCalledWith(['b']);

    // disable
    const disableHeader = headers[2];
    expect(disableHeader.classes()).toContain('is-disabled');
    await disableHeader.trigger('click');
    const disableContent = contents[2];
    expect(disableContent.isVisible()).toBe(false);
  }); */
});

import { describe, expect, test, vi } from 'vitest';
import type { Mocked } from 'vitest';
import { testFn, request } from './utils';
import axios from 'axios';

// mock 处理第三方模块
vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;

describe('functions', () => {
  test('create a mock function', () => {
    const callback = vi.fn();
    testFn(12, callback);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(12);
  });

  test('spy on method', () => {
    const obj = { getName: () => 'ace' };
    const spy = vi.spyOn(obj, 'getName');
    obj.getName();
    expect(spy).toHaveBeenCalled();

    obj.getName();
    expect(spy).toHaveBeenCalledTimes(2);
  });

  test('mock third party module', async () => {
    // axios get 请求
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 'ace' }));
    // mockedAxios.get.mockResolvedValue({ data: 'ace' }); // 简写

    const result = await request();

    expect(result).toBe('ace');
  });
});

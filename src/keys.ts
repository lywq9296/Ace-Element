import type { InjectionKey, Ref } from 'vue';

export const langKey = Symbol('lang') as InjectionKey<Ref<string>>;

export const userKey = Symbol('user') as InjectionKey<{ name: string }>;

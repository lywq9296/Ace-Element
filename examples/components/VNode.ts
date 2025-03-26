import { defineComponent, h, ref } from 'vue';

// const vnode = h('div', { id: 'foo' }, 'hello');

export default defineComponent({
  name: 'VNode',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(1);

    // render function
    return () => {
      return h('div', props.msg + count.value);
    };
  },
});

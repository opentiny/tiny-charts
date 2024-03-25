<template>
  <div class="ic-example-list">
    <div class="ic-example-list-title">
      {{ title }}
    </div>
    <tiny-input v-model="value" :placeholder="placeholder" :suffix-icon="TinyIconSearch" @input="input"></tiny-input>
  </div>
</template>

<script>
import { IconSearch } from '@opentiny/vue-icon';
export default {
  emits: ['input'],
  name: 'Search',
  data() {
    return {
      value: '',
      TinyIconSearch: IconSearch(),
    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请搜索',
    },
    paths: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

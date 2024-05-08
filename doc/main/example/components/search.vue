<!--
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
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

<template>
  <a :target="target" @click="handleClick">
    <slot></slot>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: undefined,
  },
  newTab: Boolean,
});
const emit = defineEmits(["click"]);

const target = computed(() => {
  if (props.newTab) return '_blank';
  return undefined;
});

const handleClick = e => {
  emit('click', e);
};
</script>

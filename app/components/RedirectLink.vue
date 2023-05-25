<template>
  <div @click="handleClick">
    <Anchor :href="href">{{ label }}</Anchor>
  </div>
</template>

<script setup>
import Anchor from "@/components/Anchor.vue";

defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <a :href="href">
    <div :class="$style.arrow">=></div>
    <Anchor>{{ label }}</Anchor>
  </a>
</template>

<script setup>
import Anchor from "@/components/general/Anchor";

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
</script>

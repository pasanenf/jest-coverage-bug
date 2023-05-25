import { defineComponent } from "vue";

const COMPONENT_NAME = "anchor";

export const Anchor = defineComponent({
  template: `
    <a v-bind="$props" data-component-name="${COMPONENT_NAME}">
      <slot></slot>
    </a>
  `,
});

export const findAnchor = (root) => root.findComponent(Anchor);

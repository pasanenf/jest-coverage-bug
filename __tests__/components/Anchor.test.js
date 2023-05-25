import { shallowMount } from "@vue/test-utils";
import Anchor from "@/components/Anchor.vue";

describe("Anchor", () => {
  let wrapper;

  const setupTest = ({ props, slots }) => {
    wrapper = shallowMount(Anchor, {
      props,
      slots,
    });
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render default slot", () => {
    setupTest({
      slots: { default: "slot-test-text" },
    });

    const element = wrapper
      .findAll("*")
      .filter((n) => n.text() === "slot-test-text")
      .at(0);
    expect(element).toBeDefined();
  });
});

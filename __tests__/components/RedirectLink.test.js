import { shallowMount } from "@vue/test-utils";
import RedirectLink from "@/components/RedirectLink.vue";
import { Anchor, findAnchor } from "mocks/anchorMock";

describe("RedirectLink", () => {
  let wrapper;

  const setupTest = ({ props, slots }) => {
    wrapper = shallowMount(RedirectLink, {
      global: {
        stubs: { Anchor },
      },
      props,
      slots,
    });
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it("should show label as a link", () => {
    setupTest({ props: { href: "/test", label: "test-label" } });

    const link = findAnchor(wrapper);
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe("test-label");
  });
});

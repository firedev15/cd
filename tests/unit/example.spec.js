import { shallowMount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

// Activity 2

describe("RandomNumber.vue", () => {
  test("By default the random number should be 0", () => {
    const wrapper = shallowMount(RandomNumber)
    expect(wrapper.html()).toContain('0')
  }),

// Activity 3

  it("if button clicked, the random number should be  from 11-10", async() => {
    const wrapper = shallowMount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(1)
    expect(random_number).toBeLessThanOrEqual(10)
  })
  
})

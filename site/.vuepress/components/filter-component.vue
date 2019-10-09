<script>
export default {
  functional: true,
  render(createElement, { children }) {
    console.log(children[0])
    // return createElement("div", [children[0].$slot.mess]);
  }
};
</script>
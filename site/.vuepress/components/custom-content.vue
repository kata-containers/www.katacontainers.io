<script>
export default {
  functional: true,

  props: {
    custom: {
      type: Boolean,
      default: true
    }
  },

  render(h, { parent, props, data }) {
    return h(parent.$page.key, {
      todd: "yes",
      class: [props.custom ? "custom" : ""],
      style: data.style
    });
  }
};
</script>
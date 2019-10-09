<template>
	<div :class="['box', variant ]">
		<h4 v-if="title" class="box-title">{{ title }}</h4><!-- /.box-title -->

		<div class="box-entry">
			<slot />
		</div><!-- /.box-entry -->

		<div v-if="withActions" class="box-actions">
			<slot name="actions" />
		</div><!-- /.box-actions -->
	</div><!-- /.box -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Box",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    withActions: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "is-primary-blue"
    },
    title: {
      type: String,
      default: () => {}
    }
  }
};
</script>

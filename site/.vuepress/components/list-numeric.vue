<template>
	<div class="list-numeric">
		<h4 class="list-numeric-title">{{ title }}</h4><!-- /.list-numeric-title -->

		<ul>
			<li
				v-for="(item, i) in items"
				:key="i">
				<slot :item="item" />
			</li>
		</ul>
	</div><!-- /.list-numeric -->
</template>

<script>
	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'ListNumeric',

		/**
		 * The supported properties of the component.
		 * 
		 * @type {Object}
		 */
		props: {
			title: {
				type: String,
				default: () => {}
			},
			items: {
				type: Array,
				required: true,
				default: () => {}
			}
		}
	}
</script>

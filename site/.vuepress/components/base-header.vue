<template>
	<div class="header">
		<bar />
		<navigation />
	</div><!-- /.header -->
</template>

<script>
	/**
	 * @ The internal dependecies.
	 */
	import Navigation from './navigation';
	import Bar from './bar';

	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'BaseHeader',

		/**
		 * The imported components.
		 */
		components: {
			Bar,
			Navigation
		}
	}
</script>

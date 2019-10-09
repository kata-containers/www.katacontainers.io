<template>
	<section
		class="section"
		:style="image && {
			'background-image': `url('${image}')`
		}">
		<div :class="['container', containerClass]">
			<header v-if="withHead" class="section-head">
				<h3 class="section-title">{{ title }}</h3><!-- /.section-title -->

				<slot name="head" />
			</header><!-- /.section-head -->

			<div class="section-body">
				<slot />
			</div><!-- /.section-body -->

			<footer v-if="withFoot" class="section-foot">
				<slot name="foot" />
			</footer><!-- /.section-foot -->
		</div><!-- /.container -->
	</section><!-- /.section -->
</template>

<script>
	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'BaseSection',

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
			image: {
				type: String,
				default: () => {}
			},
			containerClass: {
				type: String,
				default: () => {}
			},
			withFoot: {
				type: Boolean,
				default: false
			},
			withHead: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

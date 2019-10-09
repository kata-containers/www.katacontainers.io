<template>
	<div :class="['field-wrapper', type]">
		<label class="field-wrapper-label" :for="labelFor">
			<span>{{ label }}</span>

			<span class="field-wrapper-message">{{ message }}</span>
		</label>

		<b-field-body :type="type">
			<slot />
		</b-field-body>
	</div><!-- /.field-wrapper -->
</template>

<script>
	/**
	 * @ The external dependecies.
	 */
	import FieldBody from 'buefy/src/components/field/FieldBody'

	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'field-wrap',

		/**
		 * The imported components.
		 * 
		 * @type {Object}
		 */
		components: {
			'b-field-body': FieldBody
		},

		/**
		 * The supported properties of the component.
		 * 
		 * @type {Object}
		 */
		props: {
			type: {
				type: String,
				default: () => {}
			},
			label: {
				type: String,
				default: () => {}
			},
			labelFor: {
				type: String,
				default: () => {}
			},
			message: {
				type: String,
				default: () => {}
			}
		}
	}
</script>

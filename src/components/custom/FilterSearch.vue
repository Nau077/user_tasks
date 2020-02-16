<template lang="pug">
	.search-wrapper
		slot(name="title")
		input(
			type="text"
			v-model="search"
			@input="$emit('update:filteredArray', filteredArray)"
			placeholder="Search users..."
			)
</template>

<script>
export default {
	name: 'FilterSearch',
	props: {
		arrayToFilter: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			search: ''
		}
	},
	created() {
		this.$emit('update:filteredArray', this.filteredArray)
	},
	computed: {
		filteredArray() {
			if (!this.search.length) return this.arrayToFilter

			return this.arrayToFilter.filter(item => {
				const fullItem = item.firstName + item.lastName
				return fullItem.toLowerCase().includes(this.search.toLowerCase())
			})
		}
	},
	watch: {
		$props: {
			handler() {
				this.$emit('update:filteredArray', this.filteredArray)
			},
			deep: true,
			immediate: true
		}
	}
}
</script>

<style scoped lang="scss">
.search-wrapper {
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 200px;
	width: 100%;
	margin: 5px auto 5px auto;
	label {
		font-size: 13px;
		color: rgba(0, 0, 0, 0.5);
		margin: 10px auto 10px auto;
		transition: 0.15s all ease-in-out;
	}
	input {
		padding: 4px 12px;
		color: rgba(0, 0, 0, 0.7);
		border: 2px solid #4caf50;
		transition: 0.15s all ease-in-out;
		background: white;
		&:focus {
			outline: none;
			transform: scale(1.05);
			& + label {
				font-size: 10px;
				transform: translateY(-24px) translateX(-12px);
				top: -15px;
				left: 5px;
				z-index: 3;
			}
		}
		&::-webkit-input-placeholder {
			font-size: 12px;
			color: rgba(0, 0, 0, 0.5);
			font-weight: 100;
		}
	}
}
</style>

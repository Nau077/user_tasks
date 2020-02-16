<template lang="pug">
header
	.container
		li(v-for="(item, i) in navbars")
			router-link(:to="{path:item.router}" class='router-t') {{item.names}}
</template>

<script>
export default {
	name: 'Menu',
	props: {
		msg: String
	},
	data() {
		return {
			navbars: [
				{ names: 'Main', router: '/' },
				{ names: 'Users', router: '/Users' },
				{ names: 'About', router: '/About' }
			]
		}
	}
}
</script>

<style lang="scss">
header {
	width: 100%;
	color: rgb(248, 248, 248);
	background-color: rgb(245, 239, 239);
	width: 100%;
	.container {
		display: flex;
		width: 100%;
		max-width: 200px;
		justify-content: space-around;
		margin: auto;
		height: 40px;
		align-items: center;
	}
	li a {
		font-weight: bold;
	}
	li a.router-link-exact-active {
		color: #42b983;
	}
}
</style>

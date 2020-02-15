<template lang="pug">
	section
		UserList
</template>

<script>
import UserList from '@/components/page-modules/UserList'

export default {
	name: 'Users',
	components: {
		UserList
	},
	data() {
		return {}
	}
}
</script>
<style scoped>
p {
	margin-right: 10px;
}
</style>

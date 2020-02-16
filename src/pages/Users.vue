<template lang="pug">
	section
		UserList(:canShowEdit='isShowEditBlock')
</template>

<script>
import UserList from '@/components/page-modules/UserList'

export default {
	name: 'Users',
	components: {
		UserList
	},
	data() {
		return {
			isShowEditBlock: false
		}
	}
}
</script>
<style scoped>
p {
	margin-right: 10px;
}
</style>

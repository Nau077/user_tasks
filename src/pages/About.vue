<template lang="pug">
	section.about
		.text-wrapper
			h1 About
			.description
				h3 Description
				ul
					li User`s widget powered by vue.js and Firebase 			
					li On the main page is the widget itself with the add button and edit ability.
					li On the Users page an example of reusing the user list component without the ability to edit
					li Also we can reuse 'editUser' component, 'addUser', filterSearch components. We only need to pass needed props and emits.
					li Validation conditions are met
					br
					li App has linter, prettier and written today unit-tests:). To run tests: npm run tests:unit, to run prettier npm run lint --fix
					li Linter rules are in .eslint.js, common styles are at /src/styles/main.scss, fireBase API services-functions are at /src//usersServices.js
					li Firebase API service`s functions commonly are called by vuex actions which you can easyly find at /src/store/users
		.text-wrapper
			h1 О приложении
			.description
				h3 Описание
				ul
					li Виджет по редактированию пользователей сделан с помощью vue.js и Firebase 			
					li На главной странице сам виджет с кнопкой добавить пользователя и возможностью редактирования
					li На странице Users пример переиспользования компонента taskList без возможности редактировать
					li Так же мы можем переиспользовать компоненты 'editUser', 'addUser', 'filterSearch'. 
					br
					li Подключен prettier и eslint, написаны сегодня автоматические юнит тесты:). Запустить тесты: npm run tests:unit, преттир npm run lint --fix
					li Правила еслинта внутри .eslint.js, основные стили styles are at /src/styles/main.scss, fireBase API services-functions are at /src//usersServices.js
					li функции сервиса внутри services.js Firebase API service`s вызываются с помощью экшинов vuex, он живет здесь: /src/store/users					
</template>

<script>
export default {
	name: 'About'
}
</script>
<style scoped scoped lang="scss">
.text-wrapper {
	margin: auto;
	font-size: large;
	h3 {
		margin-top: 10px;
	}
	.description {
		background: rgba(147, 233, 219, 0.945);
		box-shadow: 0 0 10px rgba(70, 68, 68, 0.5);
		max-width: 290px;
		width: 100%;
		margin: auto;
		padding-top: 10px;
		ul {
			text-align: left;
			padding: 0 40px 40px 40px;
			li {
				color: rgb(80, 74, 74);
				list-style-type: circle;
				margin-bottom: 7px;
			}
		}
	}
}
@media (min-width: 600px) {
	.text-wrapper .description {
		max-width: 700px;
	}
}
</style>

<template>
  <div class="container">
	<div class="header">Header</div>
	<div class="left-sidebar">
		<Person v-for="(person, i) in persons" 
			:person="person" :key="i"
			@click.native="displayUserDetails(person.id)"
		/>
	</div>
	<div class="content-1">
		<h5>Person Details</h5>
		<router-view />
	</div>
	<div class="content-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </div>
	<div class="right-sidebar">
		<button @click="scrollToPerson">Scroll to Person</button>
	</div>
	<div class="footer">Footer</div>
  </div>
</template>

<script>
import persondata from '../data/persons.js'
import Person from '../components/Person.vue'

export default {
	name: "Home",
	components: {
		Person
	},
	computed: {
		persons () {
			return persondata.persons
		}
	},
	methods: {
		scrollToPerson () {
			const id = Math.floor(Math.random() * 100)
			document.getElementById(id).scrollIntoView()
		},
		displayUserDetails (id) {
			this.$router.push({ path: `/user/${id}` })
		}
	}
}
</script>

<style scoped>
.container {
	height: 100vh;
	display: grid;
	grid-template-columns: 2fr 3fr 2fr 1fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas:
		'header header header header'
		'leftSidebar content1 content2 rightSidebar'
		'footer footer footer footer';
}

.container > div {
	font-size: 2em;
}

.header {
	grid-area: header;
}
.left-sidebar {
	grid-area: leftSidebar;
	overflow: auto;
}
.right-sidebar {
	grid-area: rightSidebar;
	overflow: auto;
}
.content-1 {
	grid-area: content1;
	overflow: auto;
}
.content-2 {
	grid-area: content2;
	overflow: auto;
}
.footer {
	grid-area: footer;
}
</style>


<template>
	<div>
		<v-navbar :routes="route"></v-navbar>
	</div>
</template>
<script>
	import vNavbar from './Navbar'
	import route from '../static/menu'
	
	export default {
		name: 'v-header',
		data(){
			return {
				route
			}
		},
		components:{
			vNavbar
		}
	}
</script>
<template>
	<div>
		<h1>taoge</h1>
		<p>我的天啊，我是你儿子</p>
		<h2>{{userId}}</h2>
	</div>
</template>

<script>
	export default{
		name:"taoge",
		created(){
			document.title = '陶伟强'
		},
		computed:{
			userId(){
				return this.$route.params.abc
			}
		}
	}
</script>

<style >
</style>

<template>
  <div id="app">
	  
	  <p>taoge</p>
    <!-- <router-link to="/taoge" tag="button" replace active-class="active">首页</router-link>
	<router-link to="/taoge2" replace>关于</router-link>
	<router-link to="/hehaiyan" replace>雨天</router-link> -->
	<!-- <router-link v-bind:to="'/taoge/'+ userId">like</router-link> -->
	<button @click="taoge">本人</button>
	<button @click="taoge2">女猪1</button>
	<button @click="hehaiyan" >女猪2</button>
	
	<button @click="liked">caonima</button>
	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
	  return{
		  userId:'like',
		  kuai:'kuaile'
	  }
  },
  methods:{
	  taoge(){
		  this.$router.replace('/taoge/'+this.userId)
		  console.log("替换当前路由")
	  },
	  taoge2(){
		  this.$router.replace('/taoge2')
	  },
	  hehaiyan(){
		  this.$router.replace('/hehaiyan')
	  },
	  liked(){
		  console.log(this.kuai)
		  
	  }
  }
}

</script>

<style>
#app{
	color: #42B983;
}
.active{
	color: gold;
}
</style>

<template>
  <div>
  <h1> {{ title }} </h1>
  <p> {{ greeting() }} </p>
  <doethe></doethe>
  </div>
</template>

<script>


import warriors from './Doethe.vue'

export default {
 components: {
    'doethe': warriors
  },
  data () {
    return {
        title: 'Doethe app'
    }
  },
  methods:{
    greeting:function(){
     return "hey! hya! hello.";
    }
  }
}

</script>

<style>

h1{
color:orange;
}

</style>

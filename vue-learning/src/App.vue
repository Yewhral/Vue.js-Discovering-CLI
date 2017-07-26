<template>
  <div>
  <h1> {{ title }} </h1>
  <p> {{ greeting() }} </p>
  <doethe></doethe>
  </div>
</template>

<script>
export default {
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

</style>

<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>

import {bus} from "../main"

export default {
  props: {
      title: {
        type: String,
        required: true
      }
    },
  data () {
    return {
        title:'Knights of the Green Vue'
    }
  },
     methods: {
       changeTitle: function(){
          // this.$emit('changeTitle',"Knights of the Vue");
           this.title = 'Vue Knights';
           bus.$emit('titleChanges',"Knights of the Vue");
       }
     }
}

</script>

<style scoped>

header{
    background: lightgreen;
    padding: 10px;
}

h1{
    color:#222;
    text-align: center;
}

</style>

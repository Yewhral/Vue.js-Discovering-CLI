<template>
 <footer>
    <p> {{ vow }} </p>
 </footer>


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
        vow: 'When thou vowest a vow unto God, defer not to pay it; for he hath no pleasure in fools: pay that which thou vowest.'
    }
  },
  created(){
    bus.$on('titleChanged', (data) => {
     this.title = data;
    });
  }
}

</script>

<style scoped>

footer{
    background: #222;
    padding: 6px;
}
p{
 color: lightgreen;
 text-align: center;
}

</style>

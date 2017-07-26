<template>
  <div>
  <h1> availabile warriors </h1>
  <ul>
      <li v-for="warrior in warriors">{{ warrior }} </li>
  </ul>

  </div>
</template>

<script>



export default {
  data () {
    return {
        warriors: ['Ben','Ron','Kode']
    }
  },
}


</script>

<style scoped>
h1 {
 color: red;
}
</style>

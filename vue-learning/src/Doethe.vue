<template>
  <div>
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

<style>

</style>

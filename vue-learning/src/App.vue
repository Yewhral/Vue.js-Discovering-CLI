<template>
<div>
  <app-header>
  </app-header>

<app-knights>
</app-knights>

  <app-footer>
  </app-footer>
</div>
</template>

<script>


import Header from './components/Header.vue';
import Knights from './components/Knights.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    'app-header': Header,
    'app-knights': Knights,
    'app-footer': Footer
  },
  data () {
    return {

    }
  }
}

</script>

<style>

</style>

<template>
<div>
  <app-header>
  </app-header>

  <app-knights v-bind:knights="knights">
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
      knights:[
            {name:'King Arthur',speciality:'Freedom',show:false},
            {name:'Lancelot',speciality:'Wisdom',show:false},
            {name:'Percival',speciality:'Duty',show:false},
            {name:'Gawain',speciality:'Power',show:false},
            {name:'Bedivere',speciality:'Truth',show:false},
            {name:'Tristan',speciality:'Justice',show:false}
        ]
    }
  }
}

</script>

<style>

</style>

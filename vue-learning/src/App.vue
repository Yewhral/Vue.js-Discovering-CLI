<template>
<div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)">
  </app-header>

  <app-knights v-bind:knights="knights">
  </app-knights>

  <app-footer v-bind:title="title">
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
        ],
        title: 'Knights of the Green Vue'
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
        this.title = updatedTitle;
    }
  }
}

</script>

<style>

</style>

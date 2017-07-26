<template>
    <div id="knights">
        <ul>
            <li v-for="knight in knights" v-on:click="knight.show = !knight.show">
            <h2> {{ knight.name }} </h2>
            <h3 v-show="knight.show"> {{ knight.speciality }} </h3>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  props: ['knights'],
  data () {
    return {

    }
  }
}

</script>

<style scoped>
#knights{
    width:100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap:wrap;
    list-style-type:none;
    padding:0;
}
li{
    flex-grow:1;
    flex-basis:300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>

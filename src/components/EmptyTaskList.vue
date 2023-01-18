<template>
  
  <section>
    <h2>Poxa Caique, parece que você ainda não concluiu nenhuma atividade hoje</h2>

    <img src='../assets/empty.svg' />

  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'EmptyTaskList',


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    section {
        
        display: flex;
        flex-direction: column;

        align-items: center;

        padding: 0 96px 48px;

        color: #fff;
    }

    h2 {

      margin-bottom: 32px;
    }

    img {

        width: 320px;
        height: 200px;
    }

</style>

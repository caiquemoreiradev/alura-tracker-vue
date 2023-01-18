<template>
    
    <section>
        <h1>Atividades concluídas</h1>

        <TaskCard 
            v-for='(task, index) in tasks' 
            :key='index'
            :task='task'
            />
    </section>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import TaskCard from './TaskCard.vue';

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskCard
  },

  props: {
      tasks: {
          type: [],
          default: []
       } 
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

   section {

       padding: 24px 96px;
   }

   h1 {

       color: #fff;

       margin-bottom: 48px;
   }
</style>

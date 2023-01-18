<template>
  
  <div>
    <strong>{{ task.description || 'Tarefa sem descrição' }}</strong>

    <span>Projeto: {{ task.project.name || 'Tarefa sem projeto atribuído' }}</span>

    <span>Duração: {{ time }}</span>

    <span className="category">{{ task.category.name || 'Tarefa sem categoria' }}</span>
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import ITask from '../interfaces/ITask';

export default defineComponent({
  name: 'TaskCard',

   props: {
      task: {
        type: Object as PropType<ITask>,
        required: true
      }
    },

    computed: {

      time () : string {

        return new Date(this.task.timeInSeconds * 1000).toISOString().substr(11, 8);
      }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    div {

        width: 900px;
        
        margin: 16px 0;
        padding: 16px 24px;

        color: #C4C4CC;
        background-color: #29292E;

        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span.category {

      padding: 8px 16px;
      border-radius: 8px;

      font-weight: bold;

      background-color: #fff;
      color: rgb(0, 135, 95);
    }
</style>

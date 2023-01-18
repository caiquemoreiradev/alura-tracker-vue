<template>

     <button
            @click='start' 
            :disabled='isRunning'
            className='start'>
            iniciar atividade
        </button>

    <div>
        <TimeMinutes :timeInSeconds='timeInSeconds' />
        <button 
            @click='stop' 
            :disabled='!isRunning'
            className='stop'>
            concluir atividade
        </button>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TimeMinutes from './Time.vue';

export default defineComponent({
  name: 'CounterComponent',
  emits: [ 'whenCounterEnds' ],
  components: {
    TimeMinutes
  },

  data () {
      return {
        timeInSeconds: 0,
        timeRunning: 0,
        isRunning: false
      }
  },

  methods: {

    start() {

        this.isRunning = true;

        this.timeRunning = setInterval(() => {

            this.timeInSeconds += 1;
        }, 1000)
    },

    stop() {

        this.isRunning = false;
        clearInterval(this.timeRunning);

        this.$emit('whenCounterEnds', this.timeInSeconds);
        this.timeInSeconds = 0;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    button {

        height: 42px;

        padding: 12px 24px;

        border: 0;
        border-radius: 0 8px 8px 0;

        color: #fff;

        transition: all 0.2s;
    }

    button.start {

        background-color: rgb(0, 135, 95);
        border-radius: 8px;

    }

    button.stop {

        background-color: rgb(221, 41, 25);
    }

    button:hover {

        cursor: pointer;

        filter: brightness(0.5);
    }

    button:disabled {

        filter: brightness(1);
        opacity: 0.7;
        cursor: not-allowed;
    }
 
</style>
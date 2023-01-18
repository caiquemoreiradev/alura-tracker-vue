<template>
  
    <strong>{{ time }}</strong>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimeMinutes',

  props: {
      timeInSeconds: {
          type: Number,
          default: 0
      }
  },

  computed: {

    time () : string {

        return new Date(this.timeInSeconds * 1000).toISOString().substr(11, 8);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    strong {

        padding: 12px 24px;

        border-radius: 8px 0 0 8px;

        color: #fff;
        background-color: rgb(61, 60, 66);
    }
 
</style>

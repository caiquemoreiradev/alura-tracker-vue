<template>

  <section>

    <div className='inputs__container'>
      <input placeholder='digite o nome da atividade...' v-model='description' />

      <div class="project__details">
        <select v-model="projectId">
          <option value="">
            selecionar projeto
          </option>
          <option :value="project.id" v-for="project in projects" :key="project.id">
            {{ project.name }}
          </option>
        </select>

        <select v-model="categoryId">
          <option value="">
            selecionar categoria
          </option>
          <option :value="category.id" v-for="category in categories" :key="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
    </div>

    <CounterComponent @whenCounterEnds='finishTask' />
  </section>

</template>

<script lang="ts">
import { key } from '@/store';
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

import CounterComponent from './Counter.vue';

export default defineComponent({
  name: 'FormComponent',
  emits: ['whenSaveTask'],
  components: {
    CounterComponent
  },

  data() {
    return {
      description: '',
      projectId: '',
      categoryId: ''
    }
  },

  methods: {

    finishTask(timeInSeconds: number): void {

      this.$emit('whenSaveTask', {
        description: this.description,
        timeInSeconds: timeInSeconds,
        project: this.projects.find(project => project.id === this.projectId),
        category: this.categories.find(category => category.id === this.categoryId)
      })

      this.description = '';
      this.projectId = '';
      this.categoryId = '';
    }
  },

  setup() {

    const store = useStore(key)

    return {

      projects: computed(() => store.state.projects),

      categories: computed(() => store.state.categories)
    }
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  padding: 56px 96px;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

div.inputs__container {

  display: flex;
  flex-direction: column
}

select {
  height: 40px;

  width: 216px;

  padding: 0 24px;

  border: 0;
  border-left: 1px solid #ddd;
  border-radius: 8px;

  margin: 16px 16px 0 0;
}

input {

  height: 24px;
  width: 420px;

  padding: 8px 16px;

  border: 0;
  border-radius: 8px;
}
</style>

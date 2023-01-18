<template>

    <FormComponent @whenSaveTask='saveTask' />

    <TaskList v-if='!emptyTaskList' :tasks='tasks' />

    <EmptyTaskList v-if='emptyTaskList' />

</template>

<script lang="ts">

import { defineComponent } from 'vue';

import FormComponent from '../components/Form.vue';
import TaskList from '../components/TaskList.vue';
import EmptyTaskList from '../components/EmptyTaskList.vue';

import ITask from '../interfaces/ITask';


export default defineComponent({
  name: 'TasksComponent',
  components: {
    FormComponent,
    TaskList,
    EmptyTaskList
  },

  data () {

    return {
      
      tasks: [] as ITask[]
    }
  },

  computed: {

    emptyTaskList () : boolean {

      return this.tasks.length === 0
    }
  },

  methods: {

    saveTask (task: ITask) {

      this.tasks.push(task);

      console.log(task)
    }
  }
});
</script>
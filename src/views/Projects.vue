<template>

    <section class="projects">

        <form @submit.prevent="saveProject">

            <div>
                <input v-model='projectName' placeholder="por favor digite o nome do projeto...">
            </div>

            <button type="submit">adicionar projeto</button>
        </form>

        <h1>Meus projetos</h1>

        <table v-if='!emptyProjectsList'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Project Name</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="project in projects" :key='project.id'>
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                </tr>
            </tbody>
        </table>

        <EmptyProjectsList v-if='emptyProjectsList' />

    </section>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import EmptyProjectsList from '../components/EmptyProjectsList.vue';

import { useStore } from '@/store';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: "ProjectsComponent",
    data() {
        return {
            projectName: "",
        };
    },
    methods: {
        saveProject() {
           
           this.store.commit('CREATE_PROJECT', this.projectName);

            this.projectName = "";
        }
    },
    computed: {
        emptyProjectsList(): boolean {
            return this.projects.length === 0;
        }
    },
    components: { EmptyProjectsList },

    setup () {

        const store = useStore();

        return {
            store,
            projects: computed(() => store.state.projects)
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    padding: 56px 96px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

h1 {
    color: #fff;
}

form {
    display: flex;

    margin-bottom: 48px;
}

input {

    height: 24px;
    width: 420px;

    padding: 8px 16px;

    border: 0;
    border-radius: 8px 0 0 8px;
}

button {

    height: 42px;

    margin-top: -1px;

    padding: 10px 24px;

    border: 0;
    border-radius: 0 8px 8px 0;

    color: #fff;

    transition: all 0.2s;

    background-color: rgb(0, 135, 95);
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

table {

    width: 60%;
    color: #fff;
}

th,
td {
    padding: 12px 24px;
    text-align: center;
    border-bottom: 1px solid #ddd;
}

th {

    margin-bottom: 24px;
}
</style>
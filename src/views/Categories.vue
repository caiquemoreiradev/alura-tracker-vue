<template>

    <section class="categories">

        <form @submit.prevent="saveProject">

            <div>
                <input v-model='categoryName' placeholder="por favor digite o nome da categoria...">
            </div>

            <button type="submit">adicionar categoria</button>
        </form>

        <h1>Lista de categorias</h1>

        <table v-if='!emptyCategoriesList'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome da categoria</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="category in categories" :key='category.id'>
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                </tr>
            </tbody>
        </table>

        <EmptyCategoriesList v-if='emptyCategoriesList' />

    </section>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import EmptyCategoriesList from '../components/EmptyCategoriesList.vue';

import { useStore } from '@/store';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: "CategoriesComponent",
    data() {
        return {
            categoryName: "",
        };
    },
    methods: {
        saveProject() {
           
           this.store.commit('CREATE_CATEGORY', this.categoryName);

            this.categoryName = "";
        }
    },
    computed: {

        emptyCategoriesList(): boolean {
            
            return this.categories.length === 0;
        }
    },
    components: { EmptyCategoriesList },

    setup () {

        const store = useStore();

        return {
            store,
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
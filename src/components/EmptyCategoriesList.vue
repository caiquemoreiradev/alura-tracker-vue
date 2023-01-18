<template>

    <section>

        <img src='../assets/empty.svg' />

        <h2>Poxa Caique, parece que você ainda não criou nenhuma categoria</h2>


    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'EmptyCategoriesList',


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

    margin-top: 48px;
}

h2 {

    margin-bottom: 32px;
}

img {

    width: 320px;
    height: 200px;
}
</style>

<template>
  <header class="header">
    <h1>Alura Tracker</h1>

    <nav>
      <li>
        <router-link to="/">
          atividades
        </router-link>
      </li>
      <li>
        <router-link to="/projects">
          projetos
        </router-link>
      </li>
      <li>
        <router-link to="/categories">
          categorias
        </router-link>
      </li>
    </nav>

    <div className='profile__container'>
      <p>Caique Moreira</p>
      <img
        src='https://media-exp1.licdn.com/dms/image/C5603AQGgTBhw7WQQyQ/profile-displayphoto-shrink_200_200/0/1601494138564?e=1657756800&v=beta&t=sbVM1WTDZ9O2FZqDgtUHunyR0MCiEZBYRw5M4GTIdgE' />
    </div>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {

  padding: 32px 96px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  border-bottom: 0.5px solid rgb(168, 168, 179);
}

nav {
  display: flex;
}

li {
  list-style: none;

  margin: 0 16px;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
}

div.profile__container {

  display: flex;
  align-items: center;
}

p {

  font-weight: bold;
}

img {

  margin-left: 16px;

  height: 80px;
  width: 80px;

  border-radius: 40px;
}
</style>

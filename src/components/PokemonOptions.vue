<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemonArr" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Pokemon from '@/types/pokemonType';
import { PropType } from 'vue';

export default {
  name: 'PokemonOptions',
  props: {
    pokemonArr: {
      type: Array as PropType<Array<Pokemon>>,
      required: true,
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>

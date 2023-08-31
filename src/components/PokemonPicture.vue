<template>
  <div class="pokemon-container">
    <img class="pokemon-hidden" :src="imgSrc" alt="pokemon picture" />
    <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon picture" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // use defineComponent in order to attach pokemonId to starter {} obj
  name: 'PokemonPicture',
  props: {
    pokemonId: {
      required: true,
      type: Number,
    },
    showPokemon: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgSrc(): string {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
});
</script>
<style scoped>
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 200px;
  position: absolute;
  /* right: 32%; */
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.pokemon-hidden {
  filter: brightness(0);
}
</style>

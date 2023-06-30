<template>
  <div class="pokemon-container">
    <img
      class="pokemon-hidden"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon picture"
    />
    <img
      class="fade-in"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon picture"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'PokemonPicture',
};
</script>
<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
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

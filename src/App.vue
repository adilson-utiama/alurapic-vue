<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" v-bind:alt="foto.titulo"><!-- Podemos usar o atalho ':' ou 'v-bind:' -->
  </div>
</template>

<script>
export default {

   data () {

    return {
      titulo: 'Alurapic Vue',
      foto: {
          url: 'http://www.farejadordecaes.com.br/wp-content/uploads/o-que-saber-antes-de-comprar-cachorro-01.png',
          titulo: 'cachorro'
      }

    }

  }
}
</script>

<style>

</style>

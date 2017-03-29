<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos"><!-- Diretiva de laco 'v-for' -->
        <img :src="foto.url" v-bind:alt="foto.titulo"><!-- Podemos usar o atalho ':' ou 'v-bind:' -->
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {

   data () {

    return {
      titulo: 'Alurapic Vue',
      fotos: [
        
      ]
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));

  }
  
}
</script>

<style>

</style>

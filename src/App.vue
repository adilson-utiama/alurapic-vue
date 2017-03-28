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
        {
          url: 'http://www.farejadordecaes.com.br/wp-content/uploads/o-que-saber-antes-de-comprar-cachorro-01.png',
          titulo: 'cachorro'
        },
        {
          url: 'http://res.cloudinary.com/db79cecgq/image/upload/c_crop,h_811,w_1437,x_0,y_44/c_fill/v1407165291/os-10-animais-mais-fofos-do-mundo-03.jpg',
          titulo: 'cachorro 2'
        }
      ]

    }

  }
}
</script>

<style>

</style>

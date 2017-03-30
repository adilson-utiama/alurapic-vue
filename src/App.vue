<template>
  <div class="corpo">

    <h1 class="centraliza">{{ titulo }}</h1>

    <input type="search" v-on:input="filtro = $event.target.value" class="filtro" placeholder="Digite sua pesquisa"><!-- v-on: pode ser utilizado apenas com @ ex: @input -->
   
    <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro"><!-- Diretiva de laco 'v-for' -->

            <!-- Uso de Shared Component -->
            <meu-painel :titulo="foto.titulo">
                <img class="imagem-responsiva" :src="foto.url" v-bind:alt="foto.titulo"><!-- Podemos usar o atalho ':' ou 'v-bind:' -->
            </meu-painel>
                      
        </li>
    </ul>
    
  </div>
</template>

<script>

import Painel from './components/shared/painel/Painel.vue';


export default {

  //Associando Painel a 'meu-painel'
  components: {
    'meu-painel' : Painel
  },

   data () {

    return {
      titulo: 'Alurapic Vue',
      fotos: [],
      filtro: ''
    }
  },

  computed: {

    fotosComFiltro() {
        if(this.filtro) {
            let exp = new RegExp(this.filtro.trim(), 'i'); //cria uma expressao regular a partir do filtro, i = insensitive
            return this.fotos.filter(foto => exp.test(foto.titulo)); //retorna uma lista filtrada
        } else {
            return this.fotos;
        }
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

.corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: auto;
}

.centraliza {
    text-align: center;
}

.lista-fotos {
    list-style: none;
}

.lista-fotos .lista-fotos-item {
    display: inline-block;
}

.imagem-responsiva {
    width: 100%;
}

.filtro {
    border-radius: 10px;
    padding: 10px;
    display: block;
    width: 100%;
}

.filtro:focus {
    box-shadow: 0px 0px 7px blue;
}

</style>

<template>
  <div>

    <h1 class="centraliza">{{ titulo }}</h1>
    <p v-show="mensagem" class="centraliza">{{ mensagem }}</p>
    <input type="search" v-on:input="filtro = $event.target.value" class="filtro" placeholder="Digite sua pesquisa"><!-- v-on: pode ser utilizado apenas com @ ex: @input -->
   
    <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro"><!-- Diretiva de laco 'v-for' -->

            <!-- Uso de Shared Component -->
            <meu-painel :titulo="foto.titulo">
                <imagem-responsiva v-meu-transform:rotate.animate="15" :url="foto.url" :titulo="foto.titulo" />
                <router-link :to="{ name: 'altera', params : { id : foto._id }}">
                    <meu-botao tipo="button" rotulo="ALTERAR" />
                </router-link>
                <meu-botao tipo="button" rotulo="REMOVER" estilo="perigo" :confirmacao="true" @botaoAtivado="remover(foto)"/>
            </meu-painel>
                      
        </li>
    </ul>
    
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

// importou  diretiva. Tem que adicionar na propriedade directives logo abaixo!
import transform from '../../directives/Transform';


export default {

    directives: {
        'meu-transform': transform
    },

  //Associando Painel a 'meu-painel'
  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao
  },

   data () {

    return {
      titulo: 'Alurapic Vue',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },

  methods: {

      remover(foto) {
          
            this.service.apaga(foto._id)
                .then(() => { 
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto removida com sucesso!'
                }, err => {
                    this.mensagem = err.message;
            });
          
          
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

    this.service = new FotoService(this.$resource);
    this.service
        .lista()
        .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);

  }

}
</script>

<style>


.centraliza {
    text-align: center;
}

.lista-fotos {
    list-style: none;
}

.lista-fotos .lista-fotos-item {
    display: inline-block;
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

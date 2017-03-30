<template>
    <img class="imagem-responsiva" :src="url" v-bind:alt="titulo"><!-- Podemos usar o atalho ':' ou 'v-bind:' -->
</template>

<script>

export default {
    props: ['url', 'titulo']
}

</script>

<style scoped>

.imagem-responsiva {
    width: 100%;
}
</style>
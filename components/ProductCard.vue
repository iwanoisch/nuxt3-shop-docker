<template>
  <div class="card text-center product-card flex flex-col">
    <img :src="imgURL" alt="product thumb" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink class="mt-auto" :to="`/products/${product.id}`">
      <p class="btn my-4"> View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const {product} = defineProps(['product'])
const imgURL = computed(() => product.image != null ? product.image : 'https://placehold.co/600x400');

</script>

<style scoped>
.product-card {
  width: 300px;
}
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
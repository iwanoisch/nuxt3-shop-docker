<template>
  <div class="card ">
    <div class="flex md:flex-row flex-wrap gap-5 sm:flex-col justify-center">
      <div class="p-7">
        <img :src="imgURL" alt="product img" class="mx-auto my-7">
      </div>
      <div class="md:p-7 sm:p-0">
        <h2 class="text-4xl md:my-7 sm:my-0">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const {product} = defineProps(['product'])
const imgURL = computed(() => product.image != null ? product.image : 'https://via.placeholder.com/300x500');

</script>

<style scoped>
img {
  max-width: 200px;
  height: auto;
}
</style>
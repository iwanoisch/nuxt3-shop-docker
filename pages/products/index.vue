<template>
  <div>
    <div v-if="pending" class="flex md:flex-row flex-wrap gap-5 sm:flex-col justify-center">
      Loading ...
      <button class="btn" @click="refresh">Refresh</button>
    </div>
    <div v-else>
      <div class="flex md:flex-row flex-wrap gap-5 sm:flex-col justify-center">
        <div v-for="product in products">
          <ProductCard :product="product" class="m-2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'products'
})

//Fetch the products
const {pending, data: products} = await useFetch('https://fakestoreapi.com/products', {
  lazy: true,
})
const refresh = () => {
  refresh()
}
</script>

<style scoped>

</style>
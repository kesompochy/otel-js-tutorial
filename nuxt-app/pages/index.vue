<template>
  <div>
    <h1>Frontend Server</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  import { useAsyncData } from 'nuxt/app'
  const { data: message, pending } = await useAsyncData('message', async () => {
    const [message] = await Promise.all([
      $fetch('http://backend:3000/data')
      ])
    return { message }
    })
</script>

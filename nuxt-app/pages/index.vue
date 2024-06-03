<template>
  <div>
    <h1>Frontend Server</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  import { trace } from "@opentelemetry/api";
  const tracer = trace.getTracer('frontend');
  import { useAsyncData } from 'nuxt/app'
  const { data: message, pending } = await useAsyncData('message', async () => {
    const span = tracer.startSpan('fetch');
    console.log('Span started: ', span);
    const [message] = await Promise.all([
      $fetch('http://backend:3000/data')
      ])
    span.end();
    console.log('Span ended: ', span);
    return { message }
    })
</script>

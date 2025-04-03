<template>
  <div>
    <div>
      <div class="flex items-center gap-3 p-3">
        <div class="p-3 rounded-md bg-inner-bg text-primary">
          <Layout />
        </div>
        <div class="p-3">
          <h3 class="text-title">Frontend</h3>
          <span class="text-subtitle">Web development</span>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3">
        <div class="p-3 rounded-md bg-inner-bg text-primary">
          <Layout />
        </div>
        <div class="p-3">
          <h3 class="text-title">Frontend</h3>
          <span class="text-subtitle">Web development</span>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3">
        <div class="p-3 rounded-md bg-inner-bg text-primary">
          <Layout />
        </div>
        <div class="p-3">
          <h3 class="text-title">Frontend</h3>
          <span class="text-subtitle">Web development</span>
        </div>
      </div>
    </div>
    <div>
      <div>
        <label for="" class="text-title">Name</label>
        <input type="text" class="border border-border rounded-md p-2 bg-inner-bg text-title">
      </div>
      <div>
        <label for="" class="text-title">Email</label>
        <input type="text" class="border border-border rounded-md p-2 bg-inner-bg text-title">
      </div>
      <div>
        <label for="" class="text-title">Subject</label>
        <input type="text" class="border border-border rounded-md p-2 bg-inner-bg text-title">
      </div>
      <div>
        <label for="" class="text-title">Message</label>
        <input type="text" class="border border-border rounded-md p-2 bg-inner-bg text-title">
      </div>
    </div>
    <input type="submit" class="bg-primary text-white px-4 py-2 rounded-md mt-4 cursor-pointer hover:opacity-90">
  </div>
</template>

<script setup>
import { Layout } from 'lucide-vue-next';
</script>

<style scoped></style>

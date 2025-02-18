
\<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, n } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
    <select v-model="$i18n.locale" class="mb-4 p-2 border rounded-lg">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
    <h1 class="text-4xl font-bold mb-2">{{ $t('greeting') }}</h1>
    <p class="text-2xl">{{ $t('priceLabel') }}: {{ $n(999.99, 'currency') }}</p>
  </div>
</template>

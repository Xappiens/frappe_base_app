<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <template v-if="index > 0">
          <FeatherIcon name="chevron-right" class="h-4 w-4 text-gray-400" />
        </template>
        <router-link
          v-if="item.route && index < items.length - 1"
          :to="item.route"
          class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          {{ item.label }}
        </router-link>
        <span
          v-else
          class="ml-2 text-sm font-medium text-gray-900"
          :class="{ 'ml-0': index === 0 }"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="flex h-full flex-col">
    <LayoutHeader>
      <template #left-header>
        <Breadcrumbs :items="breadcrumbs" />
      </template>
    </LayoutHeader>
    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col p-6">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold text-gray-900">Detalle del Instructor</h1>
          <p class="text-sm text-gray-600">Información detallada del instructor</p>
        </div>

        <div class="flex-1 rounded-lg border bg-white p-6">
          <div class="text-center text-gray-500">
            <FeatherIcon name="user-check" class="mx-auto h-12 w-12 text-gray-400" />
            <h3 class="mt-2 text-sm font-medium text-gray-900">Cargando información del instructor...</h3>
            <p class="mt-1 text-sm text-gray-500">ID: {{ instructorId }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'

const props = defineProps(['instructorId'])

const breadcrumbs = [
  { label: 'Instructores', route: { name: 'Instructors' } },
  { label: `Instructor ${props.instructorId}`, route: { name: 'Instructor' } }
]
</script>

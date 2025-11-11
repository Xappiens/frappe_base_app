<template>
  <div class="flex h-full flex-col">
    <LayoutHeader>
      <template #left-header>
        <Breadcrumbs :items="breadcrumbs" />
      </template>
      <template #right-header>
        <Button variant="solid">
          <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
          Nuevo Programa
        </Button>
      </template>
    </LayoutHeader>
    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col p-6">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold text-gray-900">Programas Educativos</h1>
          <p class="text-sm text-gray-600">Gestiona los programas y especializaciones</p>
        </div>

        <div class="flex-1 rounded-lg border bg-white p-6">
          <div class="text-center text-gray-500">
            <FeatherIcon name="layers" class="mx-auto h-12 w-12 text-gray-400" />
            <h3 class="mt-2 text-sm font-medium text-gray-900">No hay programas</h3>
            <p class="mt-1 text-sm text-gray-500">Comienza creando un nuevo programa educativo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import LayoutHeader from '@/components/LayoutHeader.vue';

const breadcrumbs = [{ label: 'Programas', route: { name: 'Programs' } }]
</script>

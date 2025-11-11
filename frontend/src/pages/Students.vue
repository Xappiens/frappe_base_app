<template>
  <div class="flex h-full flex-col">
    <LayoutHeader>
      <template #left-header>
        <Breadcrumbs :items="breadcrumbs" />
      </template>
      <template #right-header>
        <Button variant="solid" @click="showNewStudentDialog = true">
          <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
          Nuevo Estudiante
        </Button>
      </template>
    </LayoutHeader>
    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col p-6">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold text-gray-900">Estudiantes</h1>
          <p class="text-sm text-gray-600">Gestiona los estudiantes del portal de educación</p>
        </div>

        <!-- Lista de estudiantes placeholder -->
        <div class="flex-1 rounded-lg border bg-white p-6">
          <div class="text-center text-gray-500">
            <FeatherIcon name="users" class="mx-auto h-12 w-12 text-gray-400" />
            <h3 class="mt-2 text-sm font-medium text-gray-900">No hay estudiantes</h3>
            <p class="mt-1 text-sm text-gray-500">Comienza agregando un nuevo estudiante.</p>
            <div class="mt-6">
              <Button variant="solid" @click="showNewStudentDialog = true">
                <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
                Nuevo Estudiante
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog para nuevo estudiante -->
    <Dialog v-model="showNewStudentDialog" :options="{ title: 'Nuevo Estudiante' }">
      <template #body-content>
        <div class="space-y-4">
          <FormControl label="Nombre completo" v-model="newStudent.name" />
          <FormControl label="Email" type="email" v-model="newStudent.email" />
          <FormControl label="Teléfono" v-model="newStudent.phone" />
        </div>
      </template>
      <template #actions>
        <Button variant="solid" @click="createStudent">Crear</Button>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { ref } from 'vue'

const breadcrumbs = [{ label: 'Estudiantes', route: { name: 'Students' } }]

const showNewStudentDialog = ref(false)
const newStudent = ref({
  name: '',
  email: '',
  phone: ''
})

function createStudent() {
  // TODO: Implementar creación de estudiante
  console.log('Crear estudiante:', newStudent.value)
  showNewStudentDialog.value = false
  newStudent.value = { name: '', email: '', phone: '' }
}
</script>

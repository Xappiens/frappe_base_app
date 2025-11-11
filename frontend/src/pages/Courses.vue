<template>
  <div class="flex h-full flex-col">
    <LayoutHeader>
      <template #left-header>
        <Breadcrumbs :items="breadcrumbs" />
      </template>
      <template #right-header>
        <Button variant="solid" @click="showNewCourseDialog = true">
          <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
          Nuevo Curso
        </Button>
      </template>
    </LayoutHeader>
    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col p-6">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold text-gray-900">Cursos</h1>
          <p class="text-sm text-gray-600">Gestiona los cursos y programas educativos</p>
        </div>

        <!-- Lista de cursos placeholder -->
        <div class="flex-1 rounded-lg border bg-white p-6">
          <div class="text-center text-gray-500">
            <FeatherIcon name="book-open" class="mx-auto h-12 w-12 text-gray-400" />
            <h3 class="mt-2 text-sm font-medium text-gray-900">No hay cursos</h3>
            <p class="mt-1 text-sm text-gray-500">Comienza agregando un nuevo curso.</p>
            <div class="mt-6">
              <Button variant="solid" @click="showNewCourseDialog = true">
                <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
                Nuevo Curso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog para nuevo curso -->
    <Dialog v-model="showNewCourseDialog" :options="{ title: 'Nuevo Curso' }">
      <template #body-content>
        <div class="space-y-4">
          <FormControl label="Nombre del curso" v-model="newCourse.name" />
          <FormControl label="Descripción" type="textarea" v-model="newCourse.description" />
          <FormControl label="Duración (horas)" type="number" v-model="newCourse.duration" />
        </div>
      </template>
      <template #actions>
        <Button variant="solid" @click="createCourse">Crear</Button>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { ref } from 'vue'

const breadcrumbs = [{ label: 'Cursos', route: { name: 'Courses' } }]

const showNewCourseDialog = ref(false)
const newCourse = ref({
  name: '',
  description: '',
  duration: ''
})

function createCourse() {
  // TODO: Implementar creación de curso
  console.log('Crear curso:', newCourse.value)
  showNewCourseDialog.value = false
  newCourse.value = { name: '', description: '', duration: '' }
}
</script>

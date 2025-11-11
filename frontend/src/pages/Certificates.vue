<template>
  <div class="flex h-full flex-col">
    <LayoutHeader>
      <template #left-header>
        <Breadcrumbs :items="breadcrumbs" />
      </template>
      <template #right-header>
        <Button variant="solid" @click="showNewCertificateDialog = true">
          <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
          Nuevo Certificado
        </Button>
      </template>
    </LayoutHeader>
    <div class="flex-1 overflow-hidden">
      <div class="flex h-full flex-col p-6">
        <div class="mb-4">
          <h1 class="text-2xl font-semibold text-gray-900">Certificados</h1>
          <p class="text-sm text-gray-600">Gestiona los certificados profesionales emitidos</p>
        </div>

        <!-- Lista de certificados placeholder -->
        <div class="flex-1 rounded-lg border bg-white p-6">
          <div class="text-center text-gray-500">
            <FeatherIcon name="award" class="mx-auto h-12 w-12 text-gray-400" />
            <h3 class="mt-2 text-sm font-medium text-gray-900">No hay certificados</h3>
            <p class="mt-1 text-sm text-gray-500">Comienza generando un nuevo certificado.</p>
            <div class="mt-6">
              <Button variant="solid" @click="showNewCertificateDialog = true">
                <template #prefix><FeatherIcon name="plus" class="h-4" /></template>
                Nuevo Certificado
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog para nuevo certificado -->
    <Dialog v-model="showNewCertificateDialog" :options="{ title: 'Nuevo Certificado' }">
      <template #body-content>
        <div class="space-y-4">
          <FormControl label="Estudiante" v-model="newCertificate.student" />
          <FormControl label="Curso" v-model="newCertificate.course" />
          <FormControl label="Fecha de emisión" type="date" v-model="newCertificate.issue_date" />
          <FormControl label="Calificación" type="number" v-model="newCertificate.grade" />
        </div>
      </template>
      <template #actions>
        <Button variant="solid" @click="createCertificate">Generar</Button>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import { ref } from 'vue'

const breadcrumbs = [{ label: 'Certificados', route: { name: 'Certificates' } }]

const showNewCertificateDialog = ref(false)
const newCertificate = ref({
  student: '',
  course: '',
  issue_date: '',
  grade: ''
})

function createCertificate() {
  // TODO: Implementar generación de certificado
  console.log('Generar certificado:', newCertificate.value)
  showNewCertificateDialog.value = false
  newCertificate.value = { student: '', course: '', issue_date: '', grade: '' }
}
</script>

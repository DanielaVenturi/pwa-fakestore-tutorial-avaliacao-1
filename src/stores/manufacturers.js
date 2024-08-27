import { ref } from 'vue'
import { defineStore } from 'pinia'

import ManufacturerService from '@/service/manufacturers'
const manufacturerService= new ManufacturerService()

export const useManufacturerStore = defineStore('manufacturer', () => {
  const manufacturers = ref([])

  async function getManufacturer() {
    manufacturers.value = await ManufacturerService.getManufacturer()
  }

  async function createManufacturer(manufacturer) {
    await ManufacturerService.createManufacturer(manufacturer)
    getManufacturer()
  }

  async function deleteManufacturer(manufacturer_id) {
    await ManufacturerService.deleteManufacturer(manufacturer_id)
    getManufacturer()
  }

  return { manufacturers, getManufacturer, createManufacturer, deleteManufacturer }
})

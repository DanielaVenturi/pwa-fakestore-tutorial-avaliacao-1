<script setup>
import { reactive, onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
const newCategory = reactive({
  name: '',
  icon: ''
})

async function addCategory() {
  await categoryStore.createCategory(newCategory)
  newCategory.name = ''
  newCategory.icon = ''
}

onMounted(async () => {
  await categoryStore.getCategories()
})
async function excluir(id) {
  await categoryStore.deleteCategory(id);
  category.value = await categoryStore;
  limpar();}

</script>

<template>
  <div class="container">
    <div class="category-add">
      <input type="text" v-model="newCategory.name" placeholder="Nome" />
      <input type="text" v-model="newCategory.icon" placeholder="Ícone" />
      <button @click="addCategory">Adicionar</button>
    </div>

    <div class="category-list">
      <div v-if="categoryStore.categories.length === 0">
        <p>Categorias não encontradas!!!</p>
      </div>
      <table class="category-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categoryStore.categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.icon }}</td>
            <td><span class="mdi mdi-delete" /></td>
            <button @click="excluir(category.id)">X</button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-list {
  width: 30vw;
  border-collapse: collapse;

  & th {
    font-weight: bold;
  }

  & tr:nth-child(odd) {
    background-color: beige;
  }
}
</style>
<script setup lang="ts">
import ItemsColumn from "./components/ItemsColumn.vue";
import { useItemsStore } from "./stores/items";
import ItemBox from "./components/ItemBox.vue";

const itemsStore = useItemsStore();

</script>

<template>
  <div class="content">
    <div class="selected-items">
      <ItemsColumn :items-list="itemsStore.itemsList" @update-list="itemsStore.removeItemFromLeftList"></ItemsColumn>
      <ItemBox :item-name="itemsStore.selectedItem?.name" @click="itemsStore.removeSelectedItem"></ItemBox>
    </div>
    <div class="items-lists">
      <ItemsColumn :items-list="itemsStore.leftListComputed" @update-list="itemsStore.addItemToLeftList"></ItemsColumn>
      <ItemsColumn :items-list="itemsStore.rightListComputed" @update-list="itemsStore.setSelectedItem"></ItemsColumn>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
}

.selected-items {
  display: flex;
  gap: 50px;
  justify-content: space-between;
}

.items-lists {
  display: flex;
  gap: 50px;
}
</style>

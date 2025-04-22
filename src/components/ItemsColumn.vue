<template>
    <div class="flex-col">
        <ItemBox v-for="item in props.itemsList" :item-name="item.name" @click="emits('updateList', item)"></ItemBox>
    </div>
</template>
<script setup lang="ts">
import type { Item } from '../entities/item';
import ItemBox from './ItemBox.vue';

const props = defineProps<{
    itemsList: Item[] | Set<Item>
}>()

const emits = defineEmits<{
    'updateList': [Item]
}>()

</script>
<style scoped>
.flex-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    border: 1px solid white;
}
</style>
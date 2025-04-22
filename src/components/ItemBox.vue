<template>
    <button class="item">
        {{ props.itemName }}
    </button>
</template>
<script setup lang="ts">

const props = defineProps<{
    itemName: string | undefined
}>()

</script>
<style scoped>
.item {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid white;
    color: white;
}
</style>
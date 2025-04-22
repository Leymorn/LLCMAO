import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { type Item } from "../entities/item"

export const useItemsStore = defineStore("item", () => {
  const rightList = [
    {
      id: 11,
      name: "Jacket 1",
    },
    {
      id: 12,
      name: "Jacket 2",
    },
    {
      id: 13,
      name: "Jacket 3",
    },
    {
      id: 14,
      name: "Jacket 4",
    },
    {
      id: 15,
      name: "Hoodie 1",
    },
    {
      id: 16,
      name: "Hoodie 2",
    },
    {
      id: 17,
      name: "Hoodie 3",
    },
    {
      id: 18,
      name: "Hoodie 4",
    },
  ]
  const leftList = [
    {
      id: 1,
      name: "Shoes 1",
    },
    {
      id: 2,
      name: "Shoes 2",
    },
    {
      id: 3,
      name: "Shoes 3",
    },
    {
      id: 4,
      name: "Shoes 4",
    },
    {
      id: 5,
      name: "T-shirt 1",
    },
    {
      id: 6,
      name: "T-shirt 2",
    },
    {
      id: 7,
      name: "T-shirt 3",
    },
    {
      id: 8,
      name: "T-shirt 4",
    },
  ]

  const rightListComputed = computed(() => {
    if (selectedItem.value?.id) {
      return rightList.filter((x) => x.id != selectedItem.value?.id)
    } else {
      return rightList
    }
  })

  const leftListComputed = computed(() => {
    if (itemsList.value?.size > 0) {
      return leftList.filter(
        (x) => !Array.from(itemsList.value).some((item) => item.id === x.id),
      )
    } else {
      return leftList
    }
  })

  const selectedItem = ref<Item | null>(null)
  const itemsList = ref<Set<Item>>(new Set())

  function setSelectedItem(item: Item): void {
    selectedItem.value = item
  }

  function removeSelectedItem(): void {
    selectedItem.value = null
  }

  function addItemToLeftList(item: Item): void {
    itemsList.value.add(item)
  }

  function removeItemFromLeftList(item: Item): void {
    itemsList.value.delete(item)
  }

  return {
    selectedItem,
    itemsList,
    rightListComputed,
    leftListComputed,
    setSelectedItem,
    removeSelectedItem,
    addItemToLeftList,
    removeItemFromLeftList,
  }
})

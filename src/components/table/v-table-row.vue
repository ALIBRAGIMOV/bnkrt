<template>
  <div class="v-table-row">
    <div class="row__address">{{ row_data.address.city }}</div>
    <div class="row__phone">{{ row_data.phone }}</div>
    <div class="row__email">{{ row_data.email }}</div>
    <div class="row__name">{{ row_data.name }}</div>

  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style>
.v-table-row {
  display: flex;
  justify-content: space-around;
}
</style>
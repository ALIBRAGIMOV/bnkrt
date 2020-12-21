<template>
  <el-table-column
      prop="name"
      label="Name"
      width="180"
      :filters="[{text: row_data.name, value: row_data.name }]"
      :filter-method="filterHandler"
  />
</template>

<script>
export default {
name: "v-filter",
  props: {
    row_data: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<style scoped>

</style>
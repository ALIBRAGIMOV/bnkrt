<template>
  <el-button type="warning" @click="reset" plain>Сброс</el-button>
</template>

<script>
export default {
  name: "ResetButton",
  methods: {
    reset() {
      this.$store.commit('reset');
    }
  }
}
</script>
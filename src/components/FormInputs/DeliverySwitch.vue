<template>
  <el-form-item label="Мгновенная доставка">
    <el-switch v-model="delivery"></el-switch>
  </el-form-item>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "DeliverySwitch",
  data() {
    return {
      form: {
        delivery: false
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },

  computed: {
    ...mapState({list: state => state.list}),

    delivery: {
      get() {
        return this.list.delivery;
      },
      set(delivery) {
        this.setData({delivery});
      }
    }
  }
}
</script>

<style scoped>

</style>
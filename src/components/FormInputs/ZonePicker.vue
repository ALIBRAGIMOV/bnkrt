<template>
  <el-form :model="this.list" :rules="rules" ref="this.list" label-width="120px">
  <el-form-item label="Зона деятельности" prop="zoneActivity">
    <el-select v-model="zoneActivity" placeholder="Выбор зоны">
      <el-option label="Первая зона" value="Первая зона"></el-option>
      <el-option label="Вторая зона" value="Вторая зона"></el-option>
    </el-select>
  </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "ZonePicker",
  data() {
    return {
      rules: {
        zoneActivity: [
          { required: true, message: 'Пожалуйста выберите зону активности', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },
  computed: {
    ...mapState({list: state => state.list}),

    zoneActivity: {
      get() {
        return this.list.zoneActivity;
      },
      set(zoneActivity) {
        this.setData({zoneActivity});
      }
    }
  }
}
</script>

<style scoped>

</style>
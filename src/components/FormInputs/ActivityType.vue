<template>
  <el-form :model="this.list" :rules="rules" ref="this.list" label-width="120px">
  <el-form-item label="Вид деятельности" prop="activityType" >
    <el-checkbox-group v-model="activityType">
      <el-checkbox label="Онлайн-деятельность" name="type"></el-checkbox>
      <el-checkbox label="Рекламная деятельность" name="type"></el-checkbox>
      <el-checkbox label="Офлайн-деятельность" name="type"></el-checkbox>
      <el-checkbox label="Простая экспозиция бренда" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "ActivityType",
  data() {
    return {
      rules: {
        activityType: [
          { type: 'array',
            required: true,
            message: 'Выберите хотя бы один вид дейтельности', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },
  computed: {
    ...mapState({list: state => state.list}),

    activityType: {
      get() {
        return this.list.activityType;
      },
      set(activityType) {
        this.setData({activityType});
      }
    }
  }
}
</script>

<style scoped>

</style>
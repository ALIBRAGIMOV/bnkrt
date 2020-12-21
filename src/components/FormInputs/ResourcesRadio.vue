<template>
  <el-form :model="this.list" :rules="rules" ref="this.list" label-width="120px">
  <el-form-item label="Ресурсы" prop="resRadio">
    <el-radio-group v-model="resRadio">
      <el-radio label="Спонсор"></el-radio>
      <el-radio label="Место"></el-radio>
    </el-radio-group>
  </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "ResourcesRadio",
  data() {
    return {
      rules: {
        resRadio: [
          { required: true, message: 'Please select activity resource', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },

  computed: {
    ...mapState({list: state => state.list}),

    resRadio: {
      get() {
        return this.list.resRadio;
      },
      set(resRadio) {
        this.setData({resRadio});
      }
    }
  }
}
</script>

<style scoped>

</style>
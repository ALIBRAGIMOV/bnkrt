<template>
  <el-form :model="this.list" :rules="rules" ref="this.list" label-width="120px">
  <el-form-item label="Форма деятельности" prop="formActDesc">
    <el-input type="textarea" v-model="formActDesc"></el-input>
  </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
name: "ActivityFormInput",
  data() {
    return {
      rules: {
        formActDesc: [
          { required: true, message: 'Пожалуйста заполните данное поле', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },
  computed: {
    ...mapState({ list: state => state.list }),
    formActDesc: {
      get() {
        return this.list.formActDesc;
      },
      set(formActDesc) {
        this.setData({ formActDesc });
      }
    }
  }
}
</script>

<style scoped>

</style>
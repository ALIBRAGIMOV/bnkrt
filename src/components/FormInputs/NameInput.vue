<template>
  <el-form :model="this.list" :rules="rules" ref="this.list" label-width="120px">
    <el-form-item
        prop="name"
        label="Имя">
      <el-input type="name" v-model="name"></el-input>
    </el-form-item>
  </el-form>
</template>


<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "NameInput",
  data() {
    return {
      rules: {
        name: [
          {required: true, message: 'Пожалуйста введите имя', trigger: 'blur'},
          {min: 3, max: 5, message: 'Длина должна быть от 3 до 5', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },

  computed: {
    ...mapState({list: state => state.list}),

    name: {
      get() {
        return this.list.name;
      },
      set(name) {
        this.setData({name});
      }
    }
  }
}
</script>
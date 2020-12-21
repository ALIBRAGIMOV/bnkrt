<template>
  <el-form :model="this.list" :rules="rules" ref="this.list" label-width="120px">
    <el-form-item label="Время деятельности" required>
      <el-col :span="11">
        <el-form-item prop="timePicker1">
          <el-date-picker type="date"
                          format="yyyy/MM/dd"
                          value-format="yyyy-MM-dd"
                          placeholder="Выберите дату"
                          v-model="timePicker1"
                          style="width: 100%;"/>
        </el-form-item>

      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="timePicker2">
          <el-time-picker placeholder="Выберите время"
                          format="HH-mm"
                          value-format="HH-mm"
                          v-model="timePicker2"
                          style="width: 100%;"/>
        </el-form-item>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "TimePickers",
  data() {
    return {
      rules: {
        timePicker1: [
          {type: 'string', required: true, message: 'Пожалуйста выберите дату', trigger: 'change'}
        ],
        timePicker2: [
          {type: 'string', required: true, message: 'Пожалуйста выберите время', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    ...mapMutations(["setData"])
  },
  computed: {
    ...mapState({list: state => state.list}),

    timePicker1: {
      get() {
        return this.list.timePicker1;
      },
      set(timePicker1) {
        this.setData({timePicker1});
      }
    },
    timePicker2: {
      get() {
        return this.list.timePicker2;
      },
      set(timePicker2) {
        this.setData({timePicker2});
      }
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Имя">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Зона деятельности">
        <el-select v-model="form.region" placeholder="Выбор зоны">
          <el-option label="Первая зона" value="shanghai"></el-option>
          <el-option label="Вторая зона" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Время деятельности">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Выберите дату" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="Выберите время" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Мгновенная доставка">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Вид деятельности">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Онлайн-деятельность" name="type"></el-checkbox>
          <el-checkbox label="Рекламная деятельность" name="type"></el-checkbox>
          <el-checkbox label="Офлайн-деятельность" name="type"></el-checkbox>
          <el-checkbox label="Простая экспозиция бренда" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Ресурсы">
        <el-radio-group v-model="form.resource">
          <el-radio label="Спонсор"></el-radio>
          <el-radio label="Место"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Форма деятельности">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Создать</el-button>
        <el-button>Отмена</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" plain>Сброс</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "EditTable",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<!--

<style>
  input {
    background-color: #2c3e50 !important;
  }

</style>
-->

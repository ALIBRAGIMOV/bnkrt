<template>
  <div>
    <el-button class="createButton" type="text" @click="dialogVisible = true">Создать</el-button>
    <el-dialog
         title="Подтверждение данных"
        :visible.sync="dialogVisible"
         width="30%"
        :before-close="handleClose">
      <span>Имя: {{this.$store.state.list.name}} <br/>
            Зона активности: {{this.$store.state.list.zoneActivity}} <br/>
            Время активности: {{this.$store.state.list.timePicker1}} в {{this.$store.state.list.timePicker2}} <br/>
            Мгновенная доставка:  {{this.$store.state.list.delivery}} <br/>
            Вид деятельности: {{this.$store.state.list.activityType.join(", ")}} <br/>
            Ресурсы: {{this.$store.state.list.resRadio}} <br/>
            Форма деятельности: {{this.$store.state.list.formActDesc}}

      </span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Отмена</el-button>
    <el-button type="primary" @click="dialogVisible = false">Подтвердить</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('Хочешь закрыть окно?')
          .then(yes => {
            done(yes);
          })
          .catch(no => {no});
    }
  }
}
</script>

<style>
.createButton{
  border: 1px solid skyblue;
  padding: 13px;
  border-radius: 0.5rem;
  margin-bottom: 10px;
}

el-dialog{
  width: 50%;
}
</style>

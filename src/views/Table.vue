<template>
  <div>
    <v-table :users_data="USERS" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VTable from "@/components/table/v-table";


export default {
  name: "Table",
  components: {
    VTable
  },
  computed:{
    ...mapGetters([
      'USERS'
    ])
  },
  methods:{
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
   mounted(){
    this.GET_USERS_FROM_API()
  }
}
</script>

<style scoped>

</style>
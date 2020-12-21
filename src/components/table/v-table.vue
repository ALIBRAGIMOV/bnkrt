<template>
  <div class="v-table"
       style="max-width: 1200px; margin: auto; justify-content: center; "
  >
    <el-table
        :data="users_data"
        :default-sort="{prop: 'name', order: 'descending'}"
        style="width: 100%">
      <v-filter
      />

      <el-table-column
          prop="address.city"
          sortable
          label="Address">
      </el-table-column>
      <el-table-column prop="phone"
                       label="Phone Number"/>

      <el-table-column
          align="right">
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search"
              size="mini"
              placeholder="Поиск"/>
        </template>
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
<!--    <div class="v-table_header">-->
<!--      <p>City</p>-->
<!--      <p>Phone</p>-->
<!--      <p>Name</p>-->
<!--      <p>UserName</p>-->
<!--    </div>-->
<!--&lt;!&ndash;    <div class="v-table__body">-->
<!--      <v-table-row-->
<!--          v-for="row in users_data"-->
<!--          :key="row.id"-->
<!--          :row_data="row"-->
<!--      />-->
<!--    </div>&ndash;&gt;-->
    </el-table>
    <el-pagination
        style="margin-top: 10px"
        background
        layout="prev, pager, next"
        :total="50">
    </el-pagination>
  </div>
</template>

<script>
// import VTableRow from "@/components/table/v-table-row";
import VFilter from "@/components/table/v-filter";

export default {
  name: "v-table",
  components: {VFilter, /*VTableRow*/},
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style>
.v-table {
  max-width: 1500px;
}

.v-table_header {
  display: flex;
  justify-content: space-around;
}

.v-table__body {

}
</style>
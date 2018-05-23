  <template>
    <div class="app-container">
      <el-table
        :data="tableData"
        style="width: 100%">

        <el-table-column
          label="姓名"
         >
          <template slot-scope="scope">
            <i class="el-icon-caret-right"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        
        <el-table-column
          label="注册日期"
        >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </template>


  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎'
          }, {
            date: '2016-05-04',
            name: '王小虎'
          }, {
            date: '2016-05-01',
            name: '王小虎'
          }, {
            date: '2016-05-03',
            name: '王小虎'
          }]
        }
      }
    }
  </script>

<style lang="less">
.el-table th>.cell{
  text-align: center;
}
</style>

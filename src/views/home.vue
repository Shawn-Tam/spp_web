<template>
  <div class="home-box">
    <el-row>
      <el-col :span="4">
        <div class="left-box">
          <div class="user-info">
            <img src="@/assets/user-logo.png" alt="" />
          </div>
          <div class="task-box">
            <div v-for="(item,index) in taskItem" :key="item">
                <span :class="item.id === selected ? 'active': ''" @click="handleTask(item)">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="right-box">
          <el-table :data="tableData" height="calc(100vh - 84px)" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!-- <div class="left-box"></div>
    <div class="right-box"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        taskItem: [
            {
                id:'zuoye',
                title:'作业'
            },
            {
                id:'kaoshi',
                title:'考试'
            },
        ],
        selected: ''
    };
  },
  methods: {
    handleTask(item){
        console.log(item)
        this.selected = item.id
    }
  },
};
</script>

<style lang="less" scoped>
.home-box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 64px);
  background: #f2f4f7;
  .el-row {
    width: calc(100vw - 160px);
    .left-box {
      background: #fff;
      height: calc(100vh - 64px);
      margin-right: 20px;
      .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 180px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .task-box {
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
        }
        span:hover,
        .active{
            color: #3B90FF;
            background: #F0F6FF;
        }
      }
    }
    .right-box {
      margin-top: 20px;
    }
  }
}
</style>

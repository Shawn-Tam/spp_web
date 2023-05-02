<template>
  <div class="home-box">
    <el-row>
      <el-col :span="4">
        <div class="left-box">
          <div class="user-info">
            <img src="@/assets/user-logo.png" alt="" />
          </div>
          <div class="task-box">
            <div v-for="(item, index) in taskItem" :key="item">
              <span
                :class="item.id === selected ? 'active' : ''"
                @click="handleTask(item)"
                >{{ item.title }}</span
              >
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <!--  -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
          <el-breadcrumb-item>{{ breadTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="right-box">
          <el-table
            :data="tableData"
            height="calc(100vh - 196px)"
            stripe
            style="width: 100%"
          >
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
                  提交
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页器 -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      taskItem: [
        {
          id: "zuoye",
          title: "作业",
        },
        {
          id: "kaoshi",
          title: "考试",
        },
      ],
      selected: "zuoye",
      breadTitle: "作业",
      currentPage: 6,
    };
  },
  methods: {
    handleTask(item) {
      console.log(item);
      this.selected = item.id;
      this.breadTitle = item.title;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
        .active {
          color: #3b90ff;
          background: #f0f6ff;
        }
      }
    }
    .right-box {
      margin-top: 20px;
      padding: 20px;
      background: #fff;
    }
  }
}
.el-breadcrumb {
  margin-top: 15px;
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>

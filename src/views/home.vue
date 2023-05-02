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
          <div class="my-zuoye" v-if="selected === 'zuoye'">
            <el-table
              :data="taskTableData"
              height="calc(100vh - 196px)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="名称"
                width="180"
              ></el-table-column>
              <el-table-column prop="description" label="描述" width="240">
              </el-table-column>
              <el-table-column
                prop="startTime"
                label="开始日期"
                width="180"
              ></el-table-column>
              <el-table-column
                prop="endTime"
                label="截止日期"
                width="180"
              ></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="beginTask(scope.row)"
                    type="text"
                    size="small"
                  >
                    开始
                  </el-button>
                  <el-button
                    @click.native.prevent="submitTask(scope.row)"
                    type="text"
                    size="small"
                  >
                    提交
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="my-chengji" v-else>
            <el-table
              :data="scoreTableData"
              height="calc(100vh - 196px)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="名称"
                width="180"
              ></el-table-column>
              <el-table-column prop="description" label="描述" width="240">
              </el-table-column>
              <el-table-column
                prop="score"
                label="分数"
                width="180"
              ></el-table-column>
              <el-table-column
                prop="teacherBack"
                label="教室评语"
                width="180"
              ></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <!-- <el-button
                  @click.native.prevent="beginTask(scope.row.ID)"
                  type="text"
                  size="small"
                >
                  开始
                </el-button>
                <el-button
                  @click.native.prevent="submitTask(scope.row.ID)"
                  type="text"
                  size="small"
                >
                  提交
                </el-button> -->
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 分页器 -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getExamTaskList,
  getExamUserTaskList,
  submitExamTask,
} from "@/serve/api";
export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      taskTableData: [
        {
          name: "作业1",
          description: "",
          startTime: "",
          endTime: "",
        },
      ],
      scoreTableData: [],
      taskItem: [
        {
          id: "zuoye",
          title: "我的作业",
        },
        {
          id: "chengji",
          title: "我的成绩",
        },
      ],
      selected: "zuoye",
      breadTitle: "我的作业",
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    handleTask(item) {
      this.selected = item.id;
      this.breadTitle = item.title;
      this.getTableData();
    },
    getTableData() {
      if (this.selected == "zuoye") {
        getExamTaskList({
          page: this.currentPage,
          pageSize: this.pageSize,
        }).then((res) => {
          console.log("getExamTaskList", res);
          console.log(res.data.total);
          this.taskTableData = res.data.list;
          this.taskTableData.forEach((item) => {
            item.startTime = this.formatDate(item.startTime);
            item.endTime = this.formatDate(item.endTime);
          });
          this.total = res.data.total;
        });
      } else {
        getExamUserTaskList({
          page: this.currentPage,
          pageSize: this.pageSize,
        }).then((res) => {
          console.log("getExamUserTaskList", res);
          this.scoreTableData = res.data.list;
          this.total = res.data.total;
        });
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableData();
    },
    beginTask(id) {
      console.log(id);
    },
    // submit(id) {
    //   submitExamTask({ taskId: id }).then((res) => {
    //     console.log(res);
    //   });
    // },
    // 作业提交
    async submitTask(row) {
      console.log(row);
      let query = {
        taskId: row.ID,
      };
      const result = await submitExamTask(query);
      console.log('111result',result)
      if(result.code === 0){
        this.$message({
          message: '提交成功',
          type: 'success'
        });
      }
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

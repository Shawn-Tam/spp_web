<template>
  <div class="main">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane
        v-for="(item, index) in problems"
        :key="index"
        :label="item.title"
      >
        <div class="container">
          <div class="left">
            <div class="left-top">
              <div class="left-title">题目描述</div>
              <div class="left-content">{{ item.content }}</div>
            </div>
          </div>
          <div class="right">
            <codemirror
              class="code-editor"
              v-model="item.code"
              :options="cmOptions"
            ></codemirror>
            <div class="submit-container">
              <el-button class="submit-button" type="primary" @click="testForm"
                >自测</el-button
              >
              <el-button
                class="submit-button"
                type="primary"
                @click="submitForm"
                >提交</el-button
              >
            </div>
            <div class="result"></div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/sql/sql.js";
import "codemirror/theme/mbo.css";

export default {
  name: "codemirror-example-sql",
  title: "Mode: text/x-go & Theme: mbo",
  components: {
    codemirror,
  },
  data() {
    return {
      cmOptions: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: "text/x-sql",
        theme: "mbo",
      },
      problemDescription: "给定两个整数，求它们的和并返回。",
      sampleInput: "1 2",
      sampleOutput: "3",
      form: {
        code: "",
      },
      tabPosition: 'left',
      problems:[
        {
          title: "problem 1",
          content: "题目内容1",
          code: ""
        },
        {
          title: "problem 2",
          content: "题目内容2",
          code: ""
        },
        {
          title: "problem 3",
          content: "题目内容3",
          code: ""
        },
      ]
    };
  },
  methods: {
    submitForm() {
      // 这里省略了表单验证逻辑，直接将表单数据提交到后端
      console.log(this.form);
    },
    testForm(){
      
    }
  },
};
</script>

<style scoped>
.main{
  width: 100%;
  height: 80vh;
}
.container {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.left {
  width: 40%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.left-top {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.left-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.left-content {
  white-space: pre-wrap;
}

.right {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.right-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.code-editor {
  text-align: left;
  width: 100%;
  height: 50vh;
  margin-bottom: 8px;
}

.submit-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.test-button {
  width: 120px;
}
.submit-button {
  width: 120px;
}

.result {
  width: 100%;
  height: 30vh;
  background-color: gold;
  margin-top: 8px;
}
</style>

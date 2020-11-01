<template>
  <div>
    <div>
      <h1 style="marginLeft:1rem">Dialog 对话框</h1>
      <div>
        <div class="codeSection">
          <g-row>
            <g-Button @click="visible=true">dialog</g-Button>

            <g-dialog :visible.sync="visible">
              <template>内容</template>
              <template v-slot:footer>
                <g-Button @click="visible = false">取消</g-Button>
                <g-Button type="primary" @click="visible = false">确认</g-Button>
              </template>
            </g-dialog>
          </g-row>
          <pre><code>
      &lt;g-dialog :visible.sync="visible"&gt;
        &lt;template&gt;内容&lt;/template&gt;
        &lt;template v-slot:footer&gt;
          &lt;g-Button @click="visible = false"&gt;取消&lt;/g-Button&gt;
           &lt;g-Button type="primary" @click="visible = false"&gt;确认&lt;/g-Button&gt;
         &lt;/template&gt;
       &lt;/g-dialog&gt;
       &lt;script&gt;
         export default {
            data () {
              return {
                visible: false
             }
            }
          }
       &lt;/script&gt;
</code>
       </pre>
        </div>
      </div>
    </div>
    <table style="padding-left:16px">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>标题名称</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>width</td>
          <td>Dialog 的宽度</td>
          <td>string</td>
          <td>-</td>
          <td>50%</td>
        </tr>
        <tr>
          <td>top</td>
          <td>Dialog 的高度</td>
          <td>-</td>
          <td>-</td>
          <td>15vh</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>是否显示 Dialog，支持 .sync 修饰符</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.codeSection {
  padding: 1rem;
  .codeItem {
    margin-top: 5px;
    display: block;
    padding: 1rem;
    overflow-x: auto;
    background: #f7f7f7;
    font-size: 1.1rem;
    line-height: 2;
    color: #999999;
    .btnName {
      color: #e45649;
    }
  }
}
table {
  width: 100%;
  line-height: 1.5rem;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 2rem;
  thead {
    font-size: 1rem;
  }
  tr {
    border-bottom: 1px solid #dcdfe6;
  }
}
</style>
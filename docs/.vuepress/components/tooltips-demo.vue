<template>
  <div>
    <div>
      <h1 style="marginLeft:1rem">Tooltip轻提示</h1>
      <div class="layoutContent">
        <div class="codeSection">
          <g-row>
            <g-toolTips content="测试1提示文字" class="codestyle" placement="top" effect="white">
              <g-Button class="ceshi1">测试1</g-Button>
            </g-toolTips>
            <g-toolTips content="测试2提示文字" class="codestyle" placement="bottom">
              <g-Button>测试2</g-Button>
            </g-toolTips>
            <g-toolTips content="测试3提示文字" class="codestyle" placement="left">
              <g-Button>测试3</g-Button>
            </g-toolTips>
            <g-toolTips content="测试4提示文字" class="codestyle" placement="right">
              <g-Button>测试4</g-Button>
            </g-toolTips>
          </g-row>
          <pre>
            <code>
            &lt;g-toolTips content="测试1提示文字" placement="top" effect="white"&gt;
                &lt;g-Button &gt;测试1&lt;/g-Button&gt;
              &lt;/g-toolTips&gt;
              &lt;g-toolTips content="测试2提示文字"  placement="bottom"&gt;
                &lt;g-Button&gt;测试2&lt;/g-Button&gt;
              &lt;/g-toolTips&gt;
              &lt;g-toolTips content="测试3提示文字"  placement="left"&gt;
                &lt;g-Button&gt;测试3&lt;/g-Button&gt;
              &lt;/g-toolTips&gt;
              &lt;g-toolTips content="测试4提示文字" placement="right"&gt;
                &lt;g-Button&gt;测试4&lt;/g-Button&gt;
              &lt;/g-toolTips&gt;
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
          <td>placement</td>
          <td>Tooltip 的出现位置</td>
          <td>string</td>
          <td>top/bottom/left/right</td>
          <td>top</td>
        </tr>
        <tr>
          <td>content</td>
          <td>显示的内容</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>effect</td>
          <td>默认提供的主题</td>
          <td>String</td>
          <td>black/white</td>
          <td>black</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.layoutContent {
  margin-top: 20px;
  .codeSection {
    padding: 1rem;
    .codestyle {
      margin-left: 10px;
    }
    .codeItem {
      margin-top: 20px;
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
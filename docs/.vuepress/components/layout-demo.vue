<template>
  <div>
    <h1>基础布局</h1>
    <p>使用单一分栏创建基础的栅格布局。</p>
    <div>
      <g-row>
        <g-col :span="24">
          <div class="grid-content bg-purple-dark"></div>
        </g-col>
      </g-row>
      <g-row>
        <g-col :span="12">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="12">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
      </g-row>
      <g-row>
        <g-col :span="8">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="8">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col :span="8">
          <div class="grid-content bg-purple"></div>
        </g-col>
      </g-row>
      <g-row>
        <g-col :span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col :span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
      </g-row>
      <g-row>
        <g-col :span="4">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col :span="4">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col :span="4">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
      </g-row>
    </div>
    <pre><code>
      &lt;g-row&gt;
        &lt;g-col :span="24"&gt;
          &lt;div class="grid-content bg-purple-dark"&gt;&lt;/div&gt;
        &lt;/g-col&gt;
      &lt;/g-row&gt;
      &lt;g-row&gt;
        &lt;g-col :span="12"&gt;
          &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
        &lt;/g-col&gt;
        &lt;g-col :span="12"&gt;
          &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
        &lt;/g-col&gt;
    &lt;/g-row&gt;
    &lt;g-row&gt;
      &lt;g-col :span="8"&gt;
        &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="8"&gt;
        &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="8"&gt;
        &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
    &lt;g-row&gt;
    &lt;g-row&gt;
      &lt;g-col :span="6"&gt;
        &lt;div class="grid-content bg-purple"gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="6"&gt;
        &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="6"&gt;
        &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="6"&gt;
        &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
    &lt;/g-row&gt;
    &lt;g-row&gt;
      &lt;g-col :span="4"&gt;
        &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="4"&gt;
        &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="4"&gt;
        &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="4"&gt;
        &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="4"&gt;
        &lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
      &lt;g-col :span="4"&gt;
        &lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;
      &lt;/g-col&gt;
    &lt;/g-row&gt;
      </code></pre>
    <h1>分栏间隔</h1>
    <p>分栏之间存在间隔。</p>
    <div>
      <g-row :gutter="20">
        <g-col :span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
      </g-row>
    </div>
    <pre><code>
  &lt;g-row :gutter="20"&gt;
    &lt;g-col :span="6"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/g-col&gt;
    &lt;g-col :span="6"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/g-col&gt;
    &lt;g-col :span="6"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/g-col&gt;
    &lt;g-col :span="6"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/g-col&gt;
  &lt;/g-row>
</code></pre>
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
          <td>span</td>
          <td>栅格占据的列数</td>
          <td>number</td>
          <td>—</td>
          <td>24</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>栅格左侧的间隔格数</td>
          <td>number</td>
          <td>—</td>
          <td>0</td>
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
.g-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.g-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
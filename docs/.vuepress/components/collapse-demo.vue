<template>
  <div>
    <h1 style="marginLeft:1rem">Collapse</h1>
    <g-collapse v-model="activeName" accordion>
      <g-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-item>
      <g-collapse-item title="一致性 Consistency" name="2">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </g-collapse-item>
    </g-collapse>
    <pre><code>
      &lt;g-collapse v-model="activeName" accordion&gt;
      &lt;g-collapse-item title="一致性 Consistency" name="1"&gt;
        &lt;div&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；&lt;/div&gt;
        &lt;div&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/div&gt;
      &lt;/g-collapse-item&gt;
      &lt;g-collapse-item title="一致性 Consistency" name="2"&gt;
        &lt;div&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；&lt;/div&gt;
        &lt;div&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/div&gt;
      &lt;/g-collapse-item&gt;
    &lt;/g-collapse&gt;
    &lt;script&gt;
      export default {
        data () {
          return {
            activeName: '1'
            };
          }
        }
    &lt;/script&gt;
    </code></pre>
    <h1>Collapse Attributes</h1>
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
          <td>value / v-model</td>
          <td>当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)</td>
          <td>string / array</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h1>Collapse Item Attributes</h1>
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
          <td>name</td>
          <td>唯一标志符</td>
          <td>string/number</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>面板标题</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '1'
    };
  }
}
</script>
<style lang="scss">
</style>
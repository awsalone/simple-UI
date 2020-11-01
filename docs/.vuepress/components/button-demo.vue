<template>
  <div>
    <div>
      <h1 style="marginLeft:1rem">Button 按钮</h1>
      <div>
        <div class="codeSection">
          <g-row>
            <g-Button class="btnsty">默认按钮</g-Button>
            <g-Button class="btnsty" type="primary">primary 按钮</g-Button>
            <g-Button class="btnsty" type="info">info 按钮</g-Button>
            <g-Button class="btnsty" type="warning">warning 按钮</g-Button>
          </g-row>
          <pre>
      <code>       
    &lt;g-Button &gt;默认按钮&lt;/g-Button &gt;
    &lt;g-Button  type="primary"&gt;primary 按钮&lt;/g-Button &gt;
    &lt;g-Button  type="info" &gt;info 按钮&lt;/g-Button &gt;
    &lt;g-Button  type="warning" &gt;warning 按钮&lt;/g-Button &gt;
            </code></pre>
        </div>
        <div class="codeSection">
          <g-row>
            <g-Button class="btnsty" round>圆角按钮</g-Button>
            <g-Button class="btnsty" round type="primary">primary 按钮</g-Button>
            <g-Button class="btnsty" round type="info">info 按钮</g-Button>
            <g-Button class="btnsty" round type="warning">warning 按钮</g-Button>
          </g-row>
          <pre>
            
    <code>&lt;g-Button round &gt;默认按钮&lt;/g-Button &gt;
    &lt;g-Button round  type="primary"&gt;primary 按钮&lt;/g-Button &gt;
    &lt;g-Button round  type="info" &gt;info 按钮&lt;/g-Button &gt;
    &lt;g-Button round  type="warning" &gt;warning 按钮&lt;/g-Button &gt;
    </code>
    </pre>
        </div>
        <div class="codeSection">
          <g-row>
            <g-Button class="btnsty" icon="setting" circle></g-Button>
          </g-row>
          <pre>
            
    <code>&lt;g-Button icon="setting" circle  type="warning" &gt;warning 按钮&lt;/g-Button &gt;
    </code></pre>
        </div>
        <div class="codeSection">
          <g-row>
            <g-Button disabled class="btnsty">禁用状态</g-Button>
          </g-row>
          <pre>
            <code>
    &lt;g-Button disabled  type="warning" &gt;禁用状态&lt;/g-Button &gt;</code></pre>
        </div>
        <div class="codeSection">
          <g-row>
            <g-Button class="btnsty" type="primary" loading>加载</g-Button>
            <g-Button class="btnsty" type="primary" icon="setting">左图标</g-Button>
            <g-Button class="btnsty" type="primary" icon="setting" iconPosition="right">右图标</g-Button>
            <g-Button class="btnsty" type="primary" icon="setting"></g-Button>
          </g-row>
          <pre>
            <code>
    &lt;g-Button loading &gt;加载&lt;/g-Button &gt;
    &lt;g-Button icon="setting"  type="primary"&gt;左图标&lt;/g-Button &gt;
    &lt;g-Button icon="setting"  type="primary" iconPosition="right" &gt;右图标&lt;/g-Button &gt;
    &lt;g-Button icon="setting"  type="primary" &gt;&lt;/g-Button &gt;</code></pre>
        </div>
        <div class="codeSection">
          <g-row>
            <g-Button-group>
              <g-Button type="primary" icon="last">上一页</g-Button>
              <g-Button type="primary">按钮组</g-Button>
              <g-Button type="primary" icon="next" iconPosition="right">下一页</g-Button>
            </g-Button-group>
          </g-row>
          <pre>
            <code>
    &lt;g-Button icon="last"  type="primary"&gt;上一页&lt;/g-Button &gt;
    &lt;g-Button type="primary" &gt;右图标&lt;按钮组/g-Button &gt;
    &lt;g-Button icon="next" iconPosition="right" type="primary" &gt;下一页&lt;/g-Button &gt;</code></pre>
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
          <td>type</td>
          <td>类型</td>
          <td>string</td>
          <td>primary / warning / base / info</td>
          <td>—</td>
        </tr>
        <tr>
          <td>round</td>
          <td>是否圆角按钮</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>是否圆形按钮</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否加载中状态</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>图标类名</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>iconPosition</td>
          <td>图标左右位置</td>
          <td>string</td>
          <td>left / right</td>
          <td>left</td>
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
.btnsty {
  margin: 5px 5px 5px 0;
}
.codeSection {
  padding: 1rem;
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
}
</style>
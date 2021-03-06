---
title: Radio
subTitle: 单选框，一般与Group配合使用实现单选
---

# 单选框
### 组件描述
- 单选选择框


### 示例代码

```js
<Radio disabled={true}>disabled</Radio>

<Radio defaultChecked={false}>非受控组件：使用defaultChecked</Radio>

<Radio checked={this.state.checked} onChange={(checked)=>{
	this.setState({
		checked: checked
	})
}}>受控组件：使用checked</Radio>
```

## API

### props列表

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| checked | 受控属性：需配合 onChange 使用更新数据 checked | boolean | - |
| defaultChecked | 非控属性：默认选中状态 | boolean | false |
| disabled | 是否禁止选择框 | boolean | false |
| iconFamily | 图标字体名 | string | - |
| iconCheckName | 选中图标名称 | string | check-square-o |
| iconUncheckName | 未选中图标名称 | string | square-o |
| onChange | 选择框变化回调，当使用 checked 属性时需配合 onChange 更新数据checked 属性 | function | - |
| left | 图标位置 | boolean | true |

### 样式对象styles

属性 | 说明 | 适用类型
----|-----|------
| container | 容器样式 | View |
| icon | 图标样式 | Icon |
| text | 选择框文字样式 | Text |
| checked | 选中时的样式 | Icon |
| disabled | 禁止时的样式 | Icon，Text |

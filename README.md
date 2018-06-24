## 知识总结
### 一：通过`webpack`配置的别名来引入`less`文件
通过别名`webpack`配置的`aliase`引入会报错

原因：`css`文件会被用`css-loader`来处理，这里CSS`@import`后的字符串会被`css-loader`视为绝对路径解析，因为我们并没有添加`css-laoder`的`alise`,所以会报找不到`@`目录。

解决方法：
在引用路径的字符串最前面添加`~`符号  
```css
/* webpack将会以~符号作为前缀的路径视作依赖模块而去解析 */
@import '~/style/theme'
```

> 各类非js（`import``require`）直接引用静态资源，依赖相对路径加载问题，都可以用`~`完美解决

### 二：在父组件中改变子组件的样式


### 三：`min-width`和`flex`结合使用

### 四：灵活使用定位和`flex`布局

### 五：定位`top=0;bottom=0;`的小技巧

### 疑问记录
1. letter为什么单独建立一个组件之后好用？
2. 粘性定位：`position:sticky`如何使用？

# bfd-i18njs

## Reason
为了解放劳动力，支持项目国际化, 临时做了这个模块。 由于React项目国际方案使用到了 `react-intl-universal` 这个模块。所以通常一个`jsx`的代码如(随便复制的😂)：
```jsx
import intl from 'react-intl-universal';
import React from 'react';
import { Form, Input, Modal, message} from 'antd';


export default Form.create()((props) => {

  const col = [{
    title: "姓名"
    key: 'name'
  },{
    age: "年龄"
    key: 'age'
  },{
    id: "编号"
    key: 'id'
  },{
    job: "工作"
    key: 'job'
  }]
  return (
    <div>
      <Modal
        width={700}
        visible={visible}
        title={title}   //测试注释
        okText="确定"  //完成并创建
        cancelText="取消"  //取消
        onOk={handleCreate}
        onCancel={onCancel}
      >
        <div className="newForm">
          {/*创建分析作业用于保存共享*/}
          <div className="hint">首页</div>
          <Form style={{width: '80%', margin: '0 auto'}}>
            {/*作业名称*/}
            <FormItem label="表单" {...formItemLayout}>
              {getFieldDecorator('taskName', {
                //请输入作业名称
                rules: [
                  {required: true, whitespace: true, message: "不能为空" },
                  {max: 50, message: '不能不填'}
                ],
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </div>
      </Modal>
      <div>页面底部</div>
    </div>
  )
}
```
## GetStart

1. install
```
npm install bfd-i18njs --save-dev
```
2. 添加下面的代码到 package.json 里面
```js
"scripts": {
  "i18n": "i18n src"
}
```

3. run 
```
npm run i18n
```

## Result
1. 这里会在当前项目中生成一个 `i18n.json` 文件，记录了所有需要翻译的中文词条
2. 已经替换了所有文件中需要国际化的地方，和一头部的代码相对应，替换后的代码如下, ：
```jsx
import intl from 'react-intl-universal';
import React from 'react';
import { Form, Input, Modal, message} from 'antd';


export default Form.create()((props) => {

  const col = [{
    title: intl.get('components_i18n_X64H')
  },{
    age: intl.get('components_i18n_mxo3')
  },{
    id: intl.get('components_i18n_ONgk')
  },{
    job: intl.get('components_i18n_7rCn')
  }]
  return (
    <div>
      <Modal
        width={700}
        visible={visible}
        title={title}   //测试注释
        okText={intl.get('components_i18n_uyup')}  //完成并创建
        cancelText={intl.get("index._i18n_4OX3")} //取消
        onOk={handleCreate}
        onCancel={onCancel}
      >
        <div className="newForm">
          {/*创建分析作业用于保存共享*/}
          <div className="hint">{intl.get('components_i18n_Gjbg')}</div>
          <Form style={{width: '80%', margin: '0 auto'}}>
            {/*作业名称*/}
            {intl.get('components_i18n_iENW')}, {intl.get('components_i18n_nr2b')}
            <FormItem label={intl.get('components_i18n_7chA')} {...formItemLayout}>
              {getFieldDecorator('taskName', {
                //请输入作业名称
                rules: [
                  {required: true, whitespace: true, message: intl.get('components_i18n_j7iM') },
                  {max: 50, message: intl.get('components_i18n_mriD')}
                ],
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </div>
      </Modal>
      <div>{intl.get('components_i18n_tnwD')}</div>
    </div>
  )
}
```
3. 词条文件 `i18n.json` 中内容如下：
```json
{ "components_i18n_uSnL": "姓名",
"components_i18n_i5Oj": "年龄",
"components_i18n_rVWn": "编号",
"components_i18n_x8zi": "工作",
"components_i18n_RvS8": "确定",
"components_i18n_ndOz": "取消",
"components_i18n_y05p": "首页",
"components_i18n_dR88": "德德",
"components_i18n_ryYY": "姓名",
"components_i18n_6nOu": "表单",
"components_i18n_ZnB6": "不能为空",
"components_i18n_BW5n": "不能不填",
"components_i18n_fRbK": "页面底部",
"title_i18n_fmnc": "姓名",
"test_i18n_qZic": "姓名",
"test_i18n_CEy5": "哈哈哈",
"page_i18n_iJnN": "姓名",
"page_i18n_fbxB": "你啊后的", }
```

## Description
1. `npm run i18n <path>` 中  `<path>` 可以是当前项目中的任何目录, **不是文件奥**, 只针对传入目录下的所有文件进行 国际化。
2. 由于使用了正则匹配， 该脚本全目录内最大限度做到去重中文词条，避免重复翻译，欢迎PR👏👏👏👏👏
3. 我准备了相关的测试文件，您可以直接 `npm run test` 试试看。
4. have fun;
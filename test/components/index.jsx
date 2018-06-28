

/**
 * 该脚本不具备任何意义，是我从别处随便找的，只是用来测试替换中文 & 收集词条。
 * 😂😂😂😂😂  勿喷！！！
 */
import React from 'react';
import { Form, Input, Modal, message} from 'antd';
import intl from 'react-intl-universal';
import { getDataDirect} from '../../../redux/actions/getDataFromServerAciton';
const FormItem = Form.Item;

export default Form.create()((props) => {
  const { visible, form, onCancel, onOk, title } = props;
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 4},
    wrapperCol: { span: 19 },
  };

  // 测试的脚本
  function handleCreate() {
    //const form = this.form;
    // if(this.isType === 'new') {
    //   sessionStorage.removeItem('taskName');
    // }
    form.validateFields((err, values) => {
      if(err) {
        return;
      }
      let path = '/task/create?userId=1';
      for(let p in values) {
        path += '&' + p + '=' + values[p];
      }

      getDataDirect(path).then((response) => {
        if(response.data.retcode == 200) {
          window.bfd.taskInformation = response.data.data;
          onCancel();
          if(!window.bfd.isClearCan) {
            onOk([], [], response.data.data);
            
          }
          //message.success(response.data.retdesc)
        }
        if(response.data.retcode != 200) {
          message.destroy();
          message.warning(response.data.retdesc);
          return false;
        }
        if(window.bfd.isInit) {
          window.bfd.isInit = false;
          window.bfd.isClearCan = false;
          window.bfd.handleClickSave&&window.bfd.handleClickSave();
        }
      });
    });
  }
  /**
   * 测试注释块
   * 测试注释块
   * 测试注释块
   * 测试注测试注释块释块
   * 测试注释块
   */
  const ss = [{
    title: "姓名"
  },{
    age: "年龄"
  },{
    id: "编号"
  },{
    job: "工作"
  }]
  return (
    <Modal
      width={700}
      visible={visible}
      title={title}   //测试注释
      okText="确定"  //完成并创建
      cancelText="取消"   //取消
      onOk={handleCreate}
      onCancel={onCancel}
    >
      <div className="newForm">
        {/*创建分析作业用于保存共享*/}
        <div className="hint">首页</div>
        <Form style={{width: '80%', margin: '0 auto'}}>
          {/*作业名称*/}
          德德, 姓名
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
          {/*作业简介*/}
          页面底部
        </Form>
      </div>
    </Modal>
  );
});

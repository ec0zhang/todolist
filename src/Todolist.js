// import React from 'react';
//
// function Todolist() {
//     constructor(props) {
//
//         super(props);
//         this.state = {
//             inputValue :'',
//             list:[]
//         };
//     }
//     return (
//         <React.Fragment>
//             <div><input/>
//                 <button>提交</button>
//             </div>
//             <ul>
//                 <li>学英语</li>
//                 <li>学数学</li>
//             </ul>
//         </React.Fragment>
//
//     );
// }
//
// export default Todolist;

import React, {Component, Fragment} from 'react';
import './style.css'
import Todoitem from './Todoitem'


class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // this.state 叫组件的状态
            inputValue: '',
            list: []
        };
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                {/*jsx 的注释写法*/}
                {/*jsx*/}
                {
                    //jsx注释的第二种
                }
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>

        );
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <Todoitem
                        // 传递值的方式
                        content={item}
                        index={index}
                        handleItemDelete={this.handleItemDelete}
                    />
                    {/* <li
                         key={index}
                         onClick={this.handleItemDelete.bind(this, index)}
                         dangerouslySetInnerHTML={{__html: item}}
                        // 这里我们希望页面对我们的输入不做转移
                        ></li> */}
                </div>
            )
        })
    }

    handleInputChange(e) {
        // console.log(e.target.value);
        // this.state.inputValue = e.target.value; 不可以直接修改，也没用
        // ------------------------------
        // this.setState({
        //     inputValue: e.target.value
        // });
        /**
         * 每一块方法的下面是上面的优化
         **/
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // });

        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))

    }

    handleItemDelete(index) {
        // immutable规定  state 不允许我们改变
        // let list = [...this.state.list];
        // list.splice(index, 1);
        //
        // this.setState({
        //     list: list
        // });
        //-----------------
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        })

        // 第二种写法，错误写法，但可以实现功能
        // this.state.list.splice(index,1);
        // this.setState({
        //     list:this.state.list
        // })

    }

}

export default Todolist;
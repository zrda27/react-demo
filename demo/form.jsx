/**
 * Created by zengruda on 10/22/16.
 */
import React from 'react';
import reactDom from 'react-dom';
require('babel-polyfill');

class Form extends React.Component{
    render(){
        return (
            <form>
                <table>
                    <tr>
                        <td>名称</td>
                        <td><input name="name" type="text" /></td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td><input name="password" type="password" /></td>
                    </tr>
                    <tr>
                        <input type="reset" value="重置" />
                    </tr>
                </table>
            </form>
        )
    }
}

reactDom.render(
    <Form/>,
    document.querySelector("#app")
);

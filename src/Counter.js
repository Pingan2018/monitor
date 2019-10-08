
import React, { Component } from "react"
import { Button } from 'antd';

class Counter extends Component{
    state = {
        num:1
    }

    render(){
        return(
            <>
                <Button type="primary">{this.state.num}</Button>
                <Button type="danger">{this.state.num}</Button>
            </>
        )
    }
}

export default Counter
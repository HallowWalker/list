import React, { Component } from 'react'
import {Card,Input, Button} from 'antd'
import { connect } from 'dva'
import styles from '../routes/List.css'

class Edit extends Component {
  state={
    name:this.props.item ?this.props.item.name:'',
    content:this.props.item ?this.props.item.content:'',
  }

  handleChange = (event, name) => {
    const value = {}
    value[name] = event.target.value
    this.setState(value)
  }


  onEdit = () => {
    const {name, content} = this.state
    const {item} = this.props
    if(item === undefined) {
      //定义函数，使输入的内容以数组形式呈现
      const item = {
        id: (new Date()).valueOf(),
        name: name,
        content: content
      }
      this.setState({name: '', content: ''})
      const {dispatch} = this.props
      dispatch({
        type: 'list/add',
        payload: item
      })
      this.props.hideModal()
    }else{
      const newItem = {
        id:item.id,
        name:name,
        content:content
      }
      this.setState({name: '', content: ''})
      this.props.dispatch({
        type:'list/update',
        payload:newItem
      })
      console.log(newItem)
      this.props.hideModal()
    }
  }

  render(){
    return(
      <Card>
        <p>taskName</p>
        <Input value={this.state.name} onChange={(event) => {this.handleChange(event, 'name')}}/>
        <p>taskContent</p>
        <Input value={this.state.content} onChange={(event) => {this.handleChange(event, 'content')}}/>
        <Button className={styles.button} disabled={!this.state.name||!this.state.content} onClick={this.onEdit}>Edit</Button>
      </Card>
    )
  }

}

export default connect()(Edit)

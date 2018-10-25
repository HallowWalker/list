import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import { connect } from 'dva'
import TodoList from '../components/TodoList'
import Edit from '../components/Edit'
import styles from './List.css'
import ButtonItem from '../components/ButtonItem'

class List extends Component {

  state = {
    modalVisible: false,
    modalTitle: '',
    modalContent:'',
  }

  showDetail = (item) => {
    this.setState({
      modalVisible:true,
      modalTitle:item.name,
      modalContent:<div>
        {item.content}
        <Button className={styles.button} onClick={()=>this.onUpdate(item)}>update</Button>
      </div>
    })
  }

  hideModal = () => {
    this.setState({
      modalVisible: false,
      modalContent:null
    })
  }

  handleDelete = (item) => {
    this.props.dispatch({
      type: 'list/delete',
      payload: item.id
    })
  }

  onAdd = (item) => {
    console.log(item)
    this.setState({
      item:'',
      modalVisible:true,
      modalTitle:'Modal',
      modalContent:<Edit
        item={item}
        hideModal={this.hideModal}
      />
    })
  }

  onUpdate = (item) => {
    this.setState({
      modalContent:<Edit
        item={item}
        hideModal={this.hideModal}
      />
    })
  }

  render () {
    // const {name,content,list} = this.state
    const { modalContent, modalVisible,modalTitle} = this.state
    const {list} = this.props
    return (
      <div>
        <h1>TodoList</h1>
        <TodoList onDelete={this.handleDelete} list={list} showDetail={this.showDetail} />

        <Modal
          footer={''}
          title={modalTitle}
          visible={modalVisible}
          onCancel={this.hideModal}
        >
          {modalContent}
        </Modal>


        <ButtonItem onClick={()=>this.onAdd()} content={'add'}/>
      </div>
    )
  }
}

export default connect(({list})=>({list}))(List)

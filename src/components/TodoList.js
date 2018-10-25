import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Popconfirm } from 'antd'

const TodoList = ({onDelete, list, showDetail}) => {
  const columns = [
    {
      title: 'taskName',
      dataIndex: 'name',
    },
    {
      title: 'taskContent',
      dataIndex: 'content'
    },
    {
      title: 'Action',
      render: (index, item) => {
        return (
          <div>
            <Popconfirm title="Delete this task?" Type='primary' onConfirm={() =>{onDelete(item)}}>
              <Button>Delete</Button>
            </Popconfirm>
          </div>
        )
      }
    },
    {
      title: 'Detail',
      render: (index, item) => {
        return (
          <div>
          <Button type='primary' onClick={() =>showDetail(item)}>detail</Button>

          </div>
        )
      }
    },
  ]

  return (
    <Table
      rowKey={'id'}
      dataSource={list}
      columns={columns}
    />
  )
}

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
}

export default TodoList

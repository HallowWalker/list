import React from 'react'
import {Button} from 'antd'

const ButtonItem =(props)=>{
  const {onClick, item, content}=props
  return(
    <div>
      <Button onClick={()=>onClick(item)}>{content}</Button>
    </div>
  )
}

export default ButtonItem

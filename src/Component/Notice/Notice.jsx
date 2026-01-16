import React from 'react'
import NoticeResuable from '../Reusable/NoticeResuable'

const Notice = () => {
    const noticeData = {
        title:"सुचना",
    images:[],
    text:""
    }
  return (
    <div>
      <NoticeResuable data={noticeData}/>
    </div>
  )
}

export default Notice

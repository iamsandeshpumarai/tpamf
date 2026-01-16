import React from 'react'
import GalleryResuable from '../Reusable/GalleryResuable'

const VideoCollection = () => {
    const videoData = {
    title: "भिडियोहरु",
    type: "video",
    collection: [ // Changed from "gallery" to "collection" to match images
        "https://www.youtube.com/watch?v=HuaVkxFDcZg",
        "https://www.youtube.com/watch?v=JlP4j0GpKS8"
    ]
};
  return (
    <div>
      <GalleryResuable data={videoData}/>
    </div>
  )
}

export default VideoCollection

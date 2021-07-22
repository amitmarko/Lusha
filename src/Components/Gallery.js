import React, { useEffect, useState, useCallback } from "react"
import Image from './Image'
import InfiniteScroll from "react-infinite-scroll-component";
import { getImages } from '../Utils/api'
import classes from './Gallery.module.scss'

const emptyItems = [...Array(18).keys()];

const Gallery = () => {
  const [images, setImages] = useState([])
  const [error, setError] = useState(false)

  const fetchImages = useCallback(async () => {
    try {
      const { data } = await getImages()
      setImages((prevImages) => [...prevImages, ...data])
    } catch (e) {
      setError(true)
    }
  }, [])

  useEffect(() => fetchImages(), [fetchImages])

  const renderLoading = () => (
    <div className={classes.gallery}>
      {emptyItems.map((key) => <Image key={key} loading />)}
    </div>
  )

  if (error) return 'Error...'

  return (
    <div className={classes.wrapper}>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={renderLoading()}
      >
        <div className={classes.gallery}>
          {images.map(Image)}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Gallery

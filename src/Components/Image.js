import React from "react"
import Heart from './Icons/Heart'
import classNames from 'classnames'
import classes from './Image.module.scss'

const renderLoading = () => (
  <div className={classes.imageBox}>
    <div className={classNames(classes.image, classes.loading)} />
  </div>
)

const Image = ({ url, description, likes, loading }) => {
  if (loading) return renderLoading()
  return (
    <div className={classes.imageBox} key={url}>
      <div style={{ backgroundImage: `url(${url})` }} className={classes.image} />
      <p className={classes.description}>{description}</p>
      <div className={classes.likesWrapper}>
        <Heart />
        <span className={classes.likes}>{likes}</span>
      </div>
    </div>
  )
}

export default Image

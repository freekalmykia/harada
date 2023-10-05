export default function Post(props) {
  console.log('props: ', props);

  const renderText = post => {
    return <p>{ post.text }</p>
  }

  const renderMedia = post => {
    return post.media.map(media => {
      return <img src={media} />
    })
  }

  const renderTop = post => {
    return (
      <div>
        <span>
          { post.userName }
        </span>
        <span>
          {`@${post.userId}`}
        </span>
        <span>
          { post.dateTime }
        </span>
      </div>
    )
  } 

  return (
    <div className="post flex border-b p-4">
      <div className="post-author">
        <img src={props.post.userAvatar} />
      </div>
      <div className="post-main">
        <div className="post-top">
          { renderTop(props.post) }
        </div>
        <div className="post-content">
          { renderText(props.post) }
          { renderMedia(props.post) }
        </div>
        <div className="post-bottom">
          { props.post.likes }
        </div>
      </div>
    </div>
  )
}
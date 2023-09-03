import { Avatar } from "./shared";
import { parseISO, formatDistanceToNowStrict, isWithinInterval, sub, format, isThisYear } from 'date-fns'

export default function Post(props) {

  const renderText = post => {
    return <div><p>{ post.text }</p></div>
  }

  const renderMedia = post => {
    return post.media.map(media => {
      return <div key={media}><img src={media} /></div>
    })
  }

  const renderPostDateTime = post => {
    const postDateTime = parseISO(post.dateTime);
    if (isWithinInterval(postDateTime, {
      start: sub(new Date(), { hours: 24 }),
      end: new Date()
    })) return `${formatDistanceToNowStrict(postDateTime)} ago`;

    if (isThisYear(postDateTime)) return format(postDateTime, 'LLL d');

    return format(postDateTime, 'LLL d, YYYY')
  }

  const renderTop = post => {

    return (
      <div className="flex justify-between items-start mb-2">
        <div className="flex shrink whitespace-nowrap overflow-hidden">
          <span className="font-bold overflow-hidden text-ellipsis mr-1">
            { post.userName }
          </span>
          <span className="overflow-hidden text-ellipsis mr-1">
            {`@${post.userId}`}
          </span>
          <span className="">
            { renderPostDateTime(post) }
          </span>
        </div>
        <div className="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </div>
    )
  } 

  return (
    <div className="post flex border-b last:border-b-0 p-3 first:pt-0">
      <div className="post-author mr-3">
        <Avatar src={props.post.userAvatar} />
      </div>
      <div className="post-main flex-1 overflow-hidden">
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
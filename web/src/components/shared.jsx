import classNames from 'classnames';

export const Avatar = (props) => {
  const { className, src, alt } = props;
  return (
    <div className={classNames(className)}>
      <img className="h-[3.875rem] w-[3.875rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={src} alt={alt}></img>
    </div>
  )
}

export const Logo = (props) => {
  const { className, src, alt } = props;
  return (
    <div className={classNames(className)}>
      <img className="h-[3.875rem] w-[3.875rem] ring-2 ring-white dark:ring-gray-800" src={src} alt={alt}></img>
    </div>
  )
}
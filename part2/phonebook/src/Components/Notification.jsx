const Notification = ({ message, classReference }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={classReference}>
        {message}
      </div>
    )
  }

export default Notification;
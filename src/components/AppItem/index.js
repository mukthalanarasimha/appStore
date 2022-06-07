import './index.css'

const AppItem = Props => {
  const {AppItemDetails} = Props
  const {appName, imageUrl} = AppItemDetails
  return (
    <li>
      <div className="appItem_container">
        <img src={imageUrl} alt={appName} className="image_container" />
        <h1>{appName}</h1>
      </div>
    </li>
  )
}

export default AppItem

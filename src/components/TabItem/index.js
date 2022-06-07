import './index.css'

const TabItem = Props => {
  const {TabItemDetails, updateActiveTabItem} = Props
  const {tabId, displayText} = TabItemDetails
  const onClickTabItem = () => {
    updateActiveTabItem(tabId)
  }

  return (
    <li>
      <div className="tab_container">
        <button type="button" onClick={onClickTabItem}>
          {displayText}
        </button>
      </div>
    </li>
  )
}
export default TabItem

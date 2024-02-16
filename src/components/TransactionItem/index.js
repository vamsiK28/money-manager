// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item, deleteFunction} = props
  const {title, amount, type} = item
  const newType = type.charAt(0) + type.slice(1).toLowerCase()
  const deleteButton = () => {
    deleteFunction(item)
  }
  return (
    <li className="transaction-item">
      <p className="each-para fisht">{title}</p>
      <p className="each-para">{amount}</p>
      <div className="last-para-box">
        <p className="last-para">{newType}</p>
        <button
          onClick={deleteButton}
          type="button"
          className="transaction-delete-button"
          data-testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

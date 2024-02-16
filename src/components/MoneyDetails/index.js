// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {currentStats} = props
  const {balance, income, expenses} = currentStats
  return (
    <div className="money-details-container">
      <div className="money-details-item lime">
        <img
          className="money-details-item-image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="money-details-item-text-container">
          <p className="money-details-item-text-container-your">Your Balance</p>
          <p
            data-testid="balanceAmount"
            className="money-details-item-text-container-balance"
          >
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="money-details-item cyan">
        <img
          className="money-details-item-image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="money-details-item-text-container">
          <p className="money-details-item-text-container-your">Your Income</p>
          <p
            data-testid="incomeAmount"
            className="money-details-item-text-container-balance"
          >
            Rs {income}
          </p>
        </div>
      </div>
      <div className="money-details-item purple">
        <img
          className="money-details-item-image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="money-details-item-text-container">
          <p className="money-details-item-text-container-your">
            Your Expenses
          </p>
          <p
            data-testid="expensesAmount"
            className="money-details-item-text-container-balance"
          >
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

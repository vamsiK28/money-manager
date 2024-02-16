import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    type: 'INCOME',
    currentsStats: {
      balance: 0,
      income: 0,
      expenses: 0,
    },
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  deleteFunction = item => {
    const {id, amount, type} = item
    const {historyList, currentsStats} = this.state
    const {balance, income, expenses} = currentsStats
    const n = parseInt(amount)

    let newStats
    if (type === 'INCOME') {
      newStats = {
        balance: balance - n,
        income: income - n,
        expenses,
      }
    } else {
      newStats = {
        balance: balance + n,
        income,
        expenses: expenses - n,
      }
    }
    this.setState({
      historyList: historyList.filter(i => i.id !== id),
      currentsStats: newStats,
    })
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {historyList, title, amount, type, currentsStats} = this.state
    if (title === '') return
    const {balance, income, expenses} = currentsStats
    const newItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const n = parseInt(amount)
    let newStats
    if (type === 'INCOME') {
      newStats = {
        balance: balance + n,
        income: income + n,
        expenses,
      }
    } else {
      newStats = {
        balance: balance - n,
        income,
        expenses: expenses + n,
      }
    }
    // console.log(newStats)
    this.setState({
      currentsStats: {...newStats},
      historyList: [...historyList, newItem],
      amount: '',
      title: '',
    })
  }

  render() {
    const {historyList, title, amount, type, currentsStats} = this.state
    // console.log(1, currentsStats)
    let liList = null
    if (historyList.length !== 0) {
      liList = historyList.map(item => (
        <TransactionItem
          deleteFunction={this.deleteFunction}
          item={item}
          key={item.id}
        />
      ))
    }

    return (
      <div className="money-manager-background">
        <div className="money-manager-main">
          <div className="money-manager-greeting">
            <h1 className="money-manager-greeting-name">Hi, Richard</h1>
            <p className="money-manager-greeting-name-para">
              Welcome back to your{' '}
              <span className="money-manager-greeting-name-para-blue">
                Money Manager
              </span>
            </p>
          </div>
          <MoneyDetails currentStats={currentsStats} />
          <div className="money-manager-transactions-container">
            <div className="money-manager-transactions-container-from-container">
              <form className="money-manager-transactions-container-form">
                <h1 className="money-manager-transactions-container-title">
                  Add transactions
                </h1>
                <label
                  className="money-manager-transactions-container-from-text"
                  htmlFor="title"
                >
                  TITLE
                </label>
                <br />
                <input
                  value={title}
                  id="title"
                  className="money-manager-transactions-container-from-input money-manager-transactions-container-from-text"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
                <label
                  className="money-manager-transactions-container-from-text"
                  htmlFor="amount"
                >
                  AMOUNT
                </label>
                <br />
                <input
                  value={amount}
                  id="amount"
                  className="money-manager-transactions-container-from-input money-manager-transactions-container-from-text"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onChangeAmount}
                />
                <label
                  className="money-manager-transactions-container-from-text"
                  htmlFor="type"
                >
                  TYPE
                </label>
                <br />
                <select
                  value={type}
                  id="type"
                  className="money-manager-transactions-container-from-input money-manager-transactions-container-from-text"
                  type="text"
                  onChange={this.onChangeType}
                >
                  {transactionTypeOptions.map(i => (
                    <option key={i.optionId} value={i.optionId}>
                      {i.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button
                  type="button"
                  className="money-manager-transactions-container-from-button"
                  onClick={this.onSubmitButton}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="money-manager-transactions-container-history">
              <h1 className="money-manager-transactions-container-title">
                History
              </h1>
              <ul className="money-manager-transactions-container-history-items-container">
                <li className="money-manager-transactions-container-history-items-container-item">
                  <p className="item-type title-font">Title</p>
                  <p className=" title-font">Amount</p>
                  <p className="title-font-last">Type</p>
                </li>
                {liList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

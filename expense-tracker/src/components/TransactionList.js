import React from 'react'

const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul class='list'>
        <li class='minus'>
            Cash <span>-$800</span><button class='delete-btn'>x</button>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList

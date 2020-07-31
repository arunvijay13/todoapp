import React from 'react'
import Balance from './components/Balance.js'
import Calculation from './components/Calculation.js'
import Transaction from './components/Transaction.js'
import AddTransaction from './components/AddTransaction.js'

import store from './redux/Store.js'
import {Provider} from 'react-redux'

function App() {
	return (
		<Provider store={store}>
			<header>
				<h2>EXPENSE TRACKER</h2>
			</header>
			<div className='container'>
				<Balance />
				<Calculation />
				<Transaction />
				<AddTransaction />
			</div>
		</Provider>
	)
}

export default App
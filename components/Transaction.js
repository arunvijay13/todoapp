import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {delete_Transaction} from '../redux/Action.js'

function Transaction() {
	const transactions = useSelector(state => state.transactions)
	const dispatch = useDispatch()

	return (
		<div>
			<h3>History</h3>
			{
				transactions.map( item => {
					return  <div key={item.id} className='transaction'>
									<p>{item.text}</p>
									<span>${item.amount}
									<button className='close' onClick={() => dispatch(delete_Transaction(item.id))}>X</button></span>
							</div>
			})
		}
		</div>
	)
}

export default Transaction
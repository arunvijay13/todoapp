import React from 'react'
import {fetchData} from '../api/Api.js'

function Chosen({countries,func}) {
	if(!countries.length){
		return 'loading...'
	}
	return (
		<div className='m-2'>
			<form className='d-flex justify-content-center align-items-center'>
				<select className='w-25' onChange={(e)=> func(e.target.value)}>
					<option key={global}>Global</option>
					{	
						countries.map(item => <option key={item.name} value={item.name}>{item.name}</option>)
					}
				</select>
			</form>
		</div>
	)
}

export default Chosen
import React,{useEffect,useState} from 'react'
import 'regenerator-runtime/runtime'

import Card from './components/Card.js'
import Chosen from './components/Chosen.js'
import Graph from './components/Graph.js'
import {fetchData,fetchCountry} from './api/Api.js'


function App() {

	const [detail,setDetail] = useState({})
	const [countries,setCountries] = useState([])
	const [country,setCountry] = useState('')

	useEffect(()=>{
	   async function fetchApi(){
	   		     setDetail(await fetchData(country))
	   }
	   fetchApi()
	},[country])

	useEffect(()=>{
		async function fetchName(){
			setCountries(await fetchCountry())
        }
		fetchName()
	},[]) 

	const changeCountry = (name) => setCountry(name)

	return (
		<div className='container'>
			<Card detail={detail} />
			<Chosen countries={countries} func={changeCountry} />
			<Graph detail={detail} country />
		</div>
	)
}

export default App

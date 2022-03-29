import {Fragment} from 'react'
import Banner from './../components/Banner'



export default function ErrorPage(){
	
	const data = {
		title: "Error 404",
		description: "Page not found",
		destination: "/",
		buttonDesc: "Go back to homepage"
	}
	return <Banner bannerProp={data}/>	
}
import {Fragment} from 'react'
import Banner from './../components/Banner'


export default function Home(){

	const data = {
		title: "Welcome to JCP Outfit",
		description: "Design. Print. Wear",
		destination: "/Products",
		buttonDesc: "Check Products"
	}

	return (
		// render navbar, banner & footer in the webpage via home.js
	<Fragment>	
		{/* <Banner bannerProp={data}/> */}
		<Banner />
	</Fragment>
	)
}

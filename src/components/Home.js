import IndexBattlebots from "./battlebots/IndexBots"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexBattlebots />
		</>
	)
}

export default Home

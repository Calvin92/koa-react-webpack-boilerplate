import React, { Component } from 'react'
import ReactDOM from 'react-dom'

require('./index.scss')

class App extends Component {
	render () {
		return (
			<div className="content">
				Hello Reactfd
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('container'))

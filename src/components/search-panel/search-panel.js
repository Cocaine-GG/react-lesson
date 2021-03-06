import React, {Component} from 'react'
import './search-panel.scss'

export default class SearchPanel extends Component{
	state = {
		term: ''
	}

	onUpdateSearch = (e) => {
		const term = e.target.value
		this.setState({term})
		this.props.onUpdateSearch(term)
	}

	render() {
		return (
			<input className='search-input form-control'
						 type='text'
						 placeholder='Поиск по записям'
						 onChange={this.onUpdateSearch}
			/>
		)
	}
}

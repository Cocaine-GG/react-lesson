import React, {Component} from 'react'
import './post-status-filter.scss'
import {Button, ButtonGroup} from 'reactstrap'

export default class PostStatusFilter extends Component {
	state = {
		buttons : [
			{name: 'all', label: 'Все'},
			{name: 'like', label: 'Понравились'},
			{name: 'important', label: 'Избранные'},
		]
	}
	render() {
		const {filter, onFilterSelect} = this.props
		const buttons = this.state.buttons.map(({name,label})=>{
			if (filter === name) {
				return <Button key={name}
											 outline
											 active
											 color='info'>{label}</Button>
			}else{
				return <Button key={name}
											 outline
											 onClick={()=>onFilterSelect(name)}
											 color='info'>{label}</Button>
			}
		})
		return (
			<ButtonGroup className='post-status-filter'>
				{buttons}
			</ButtonGroup>
		)
	}
}

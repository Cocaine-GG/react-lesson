import React, {Component} from 'react'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.scss'

export default class App extends Component{

	state = {
		data : [
			{label: 'Выучить Реакт', important: false, id : 100},
			{label: 'Сделать первое приложение на реакте', important: false, id : 101},
			{label: 'Выпить кофе', important: false, id : 102},
		]
	}
	deleteItem = (id) => {
		this.setState( ({data}) => {
			const index = data.findIndex((elem) => elem.id === id)
			const newData = [...data.slice(0, index), ...data.slice(index + 1)]
			return {data: newData}
		})
	}
	addItem = (body) => {
		const newItem = {
			label:body,
			important: false,
			id: new Date().getTime()
		}
		this.setState(({data})=>{
				const newArr = [...data, newItem]
			return {
					data: newArr
			}
		})
	}
	render() {
		const {data} = this.state
		return (
			<div className="app">
				<div className='search-panel d-flex'>
					<SearchPanel/>
					<PostStatusFilter/>
				</div>
				<PostList posts={data} onDelete={this.deleteItem}/>
				<PostAddForm onCreate={this.addItem}/>
			</div>
		)
	}
}

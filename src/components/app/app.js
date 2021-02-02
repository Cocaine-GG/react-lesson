import React, {Component} from 'react'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.scss'
import AppHeader from '../app-header'

export default class App extends Component {

	state = {
		data: [
			{ label: 'Выучить Реакт', important: false, like: false, id: 100},
			{ label: 'Сделать первое приложение на реакте', important: false, like: false, id: 101},
			{ label: 'Выпить кофе', important: false, like: false, id: 102},
		],
		term: '',
		filter: 'all'
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

	onToggleImportant = (id) => {
		this.setState(({data})=>{
			const index = data.findIndex(elem=>elem.id === id)
			const old = data[index]
			const newItem = {...old, important : !old.important}

			const newData = [...data.slice(0, index), newItem ,...data.slice(index + 1)]

			return {
				data: newData
			}
		})
	}

	onToggleLiked = (id) => {
		this.setState(({data})=>{
			const index = data.findIndex(elem=>elem.id === id)
			const old = data[index]
			const newItem = {...old, like : !old.like}

			const newData = [...data.slice(0, index), newItem ,...data.slice(index + 1)]

			return {
				data: newData
			}
		})
	}

	searchPost = (items,term) => {
		if (term.length === 0){
			return items
		}
		return items.filter( item => item.label.indexOf(term) > -1)
	}

	filterPost = (items,filter) => {
		if (filter === 'like'){
			return items.filter(item => item.like)
		}else if (filter === 'important'){
			return items.filter(item => item.important)
		}else {
			return items
		}
	}

	onUpdateSearch = (term) => this.setState({term})

	onFilterSelect = (filter) => this.setState({filter})

	render() {
		const {data,term, filter} = this.state,
				  liked = data.filter(el=>el.like).length,
				  allPosts = data.length,
				  visiblePost = this.filterPost(this.searchPost(data,term), filter)

		return (
			<div className="app">
				<AppHeader liked={liked} allPosts={allPosts}/>
				<div className='search-panel d-flex'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter filter={filter}
														onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<PostList posts={visiblePost}
									onDelete={this.deleteItem}
									onToggleImportant={this.onToggleImportant}
									onToggleLiked={this.onToggleLiked} />
				<PostAddForm onCreate={this.addItem} />
			</div>
		)
	}
}

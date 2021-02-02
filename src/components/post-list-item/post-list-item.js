import React, {Component} from 'react'
import { ListGroupItem } from 'reactstrap';
import './post-list-item.scss'



export default class PostListItem extends Component {
	state = {
		important: false,
		like: false
	}

	onImportant = () => {
		this.setState(({important}) => ({
			important: !important
		}))
	}

	onLike = () => {
		this.setState(({like}) => ({
			like: !like
		}))
	}

	render() {
		const {label, onDelete} = this.props;
		const {important, like} = this.state;

		let classNames = "post-list-item list-group-item d-flex justify-content-between";
		if (important) {
			classNames += ' important';
		}
		if (like) {
			classNames += ' like';
		}
		return (
			<ListGroupItem className={classNames} >
				<span className='post-list-item-label'
							onClick={this.onLike}
				>{label}</span>
				<div className='d-flex justify-content-between align-items-center'>
					<button className='btn-star btn-sm'
									type='button'
									onClick={this.onImportant}
					>
						<i className='fa fa-star'></i>
					</button>
					<button className='btn-trash btn-sm'
									onClick={onDelete}
									type='button'
					>
						<i className='fa fa-trash-o'></i>
					</button>
					<i className='fa fa-heart'></i>
				</div>
			</ListGroupItem>
		)
	}
}


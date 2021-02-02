import React from 'react'
import { ListGroupItem } from 'reactstrap';
import './post-list-item.scss'



const PostListItem = (props) => {
	const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = props;

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
						onClick={onToggleLiked}
			>{label}</span>
			<div className='d-flex justify-content-between align-items-center'>
				<button className='btn-star btn-sm'
								type='button'
								onClick={onToggleImportant}
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

export default  PostListItem

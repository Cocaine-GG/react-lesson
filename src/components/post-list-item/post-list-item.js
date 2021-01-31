import React from 'react'
import './post-list-item.scss'

const PostListItem = () => {
	return (
		<li className='post-list-item d-flex justify-content-between'>
			<span className='post-list-item-label'>Hello</span>

			<div className='d-flex justify-content-between align-items-center'>
				<button className='btn-star btn-sm'
								type='button'
				>
					<i className='fa fa-star'></i>
				</button>
				<button className='btn-trash btn-sm'
								type='button'
				>
					<i className='fa fa-trash-o'></i>
				</button>
					<i className='fa fa-heart'></i>
			</div>
		</li>)
}

export default PostListItem

import React from 'react'
import './post-status-filter.scss'

const PostStatusFilter = () => {
	return (
		<div className='post-status-filter btn-group'>
			<button className='btn btn-outline-info'>Все</button>
			<button className='btn btn-outline-secondary'>Понравились</button>
		</div>
	)
}

export default PostStatusFilter

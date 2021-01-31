import React from 'react'
import './post-status-filter.scss'

const PostStatusFilter = () => {
	return (
		<div className='post-status-filter btn-group'>
			<button className='btn btn-outline-primary active'>All</button>
			<button className='btn btn-outline-secondary'>Liked</button>
		</div>
	)
}

export default PostStatusFilter

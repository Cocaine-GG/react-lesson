import React from 'react'
import PostListItem from '../post-list-item'
import './post-list.scss'

const PostList = () => {
	return (
		<ul className='post-list list-group'>
			<PostListItem/>
			<PostListItem/>
			<PostListItem/>
		</ul>
	)
}

export default PostList

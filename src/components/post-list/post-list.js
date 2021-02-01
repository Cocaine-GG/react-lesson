import React from 'react'
import PostListItem from '../post-list-item'
import './post-list.scss'

const PostList = ({posts}) => {
	const elements = posts.map((item)=>{
		const {id, ...itemProps} = item;
		return <PostListItem key={id} {...itemProps}/>
	})
	return (
		<ul className='post-list list-group'>
			{elements}
		</ul>
	)
}

export default PostList

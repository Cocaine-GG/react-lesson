import React from 'react'
import PostListItem from '../post-list-item'
import {ListGroup} from 'reactstrap'
import './post-list.scss'

const PostList = ({posts, onDelete}) => {
	const elements = posts.map((item)=>{
		const {id, ...itemProps} = item;

		return <PostListItem key={id} {...itemProps} onDelete ={ () => onDelete(id) }/>

	})
	return (
		<ListGroup className='post-list'>
			{elements}
		</ListGroup>
	)
}

export default PostList

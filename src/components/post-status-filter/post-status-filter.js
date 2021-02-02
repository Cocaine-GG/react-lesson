import React from 'react'
import './post-status-filter.scss'
import {Button, ButtonGroup} from 'reactstrap'

const PostStatusFilter = () => {
	return (
		<ButtonGroup className='post-status-filter'>
			<Button outline color='info'>Все</Button>{' '}
			<Button outline color='secondary'>Понравились</Button>{' '}
		</ButtonGroup>
	)
}

export default PostStatusFilter

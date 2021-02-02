import React from 'react'
import './post-add-form.scss'

const PostAddForm = ({onCreate}) => {
	return (
		<div className='post-add-form d-flex bottom-panel'>
			<input type='text'
						 placeholder='О чем вы думаете сейчас?'
						 className='form-control new-post-label'
			/>
			<button type='submit'
							onClick={()=>onCreate('Hello')}
							className='btn btn-outline-secondary'>
				Добавить
			</button>
		</div>
	)
}

export default PostAddForm

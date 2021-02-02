import React, {Component} from 'react'
import './post-add-form.scss'

export default class PostAddForm extends Component {
	state = {
		text : ''
	}

	onValueChange = (e) => {
		this.setState({
			text : e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		if (this.state.text){
			this.props.onCreate(this.state.text)
			this.setState({
				text : ''
			})
		}
	}

	render() {
		return (
			<form className='post-add-form d-flex bottom-panel'>
				<input type='text'
							 placeholder='О чем вы думаете сейчас?'
							 className='form-control new-post-label'
							 onChange={this.onValueChange}
							 value={this.state.text}
				/>
				<button type='submit'
								onClick={this.onSubmit}
								className='btn btn-outline-secondary'>
					Добавить
				</button>
			</form>
		)
	}
}

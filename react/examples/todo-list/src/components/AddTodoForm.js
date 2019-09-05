import React from 'react'

class AddTodoForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    changeText = (event) => {
        this.setState({text: event.target.value})
    }

    handleAddClick = () => {
        const text = this.state.text
        this.setState({text: ''})
        this.props.onAddTodoItem(text)
    }

    render() {
        return (
            <div>
                <label>Agregar nuevo item</label>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.changeText}
                />
                <button
                    onClick={this.handleAddClick}
                >
                    Agregar
                </button>
            </div>
        )
    }
}

export default AddTodoForm
import React from 'react'

class AddTodoForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    changeText = (event) => {
        const inputNode = event.target
        const inputValue = inputNode.value
        this.setState({text: inputValue})
    }

    handleClick = () => {
        const text = this.state.text
        this.setState({text: ''})
        this.props.onAddTodoItem(text)
    }

    render() {
        return (
            <div>
                <label>Agregar nuevo item</label>
                <input
                    name="Nombre"
                    type="text"
                    value={this.state.text}
                    onChange={this.changeText}
                />
                <button
                    onClick={this.handleClick}
                >
                    Agregar
                </button>
            </div>
        )
    }
}

export default AddTodoForm
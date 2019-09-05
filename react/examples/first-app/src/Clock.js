import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillMount() {
        clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({
            currentTime: new Date()
        })
    }

    render() {
        const currentTime = this.state.currentTime
        return <p>La hora es: {currentTime.toLocaleTimeString()}</p>
    }
}

export default Clock
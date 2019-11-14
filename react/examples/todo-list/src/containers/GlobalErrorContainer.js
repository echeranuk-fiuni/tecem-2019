import React from 'react'
import { connect } from 'react-redux'

class GlobalErrorContainer extends React.Component {
    render() {
        const { globalError } = this.props
        return (globalError && 
            <div style={{backgroundColor: 'red', width: '100%', textAlign: 'center'}}>
                {globalError.type}: {globalError.message}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    globalError: state.errors.globalError
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalErrorContainer)
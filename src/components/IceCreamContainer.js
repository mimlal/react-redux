import React from 'react'
import { buyIceCream } from '../redux'
import {connect} from 'react-redux'
const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of iceCrems-{props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)

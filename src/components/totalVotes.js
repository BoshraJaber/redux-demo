import { useSelector } from "react-redux"

const Total = () => {

    const state = useSelector(state => {
        return state.voteReducer.totalVotes;
    })

  

    return (
        <>
            <p>Total Votes: {state} </p>
        </>
    )
}

export default Total;
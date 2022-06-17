import {
    useSelector
} from "react-redux";
import { increase, reset } from '../store/redux';
import { useDispatch } from "react-redux";


const Developers = () => {
    const dispatch = useDispatch();


    const developerData = useSelector(state => {
        return { state: state.voteReducer }
    })
    console.log(11111111111111, developerData);




    function handleClick(name) {
        console.log(name)
        dispatch(increase(name))

    }

    function handleReset() {
        dispatch(reset());
    }

    return (
        <>
            {

                developerData.state.developers.map(developer => {
                    return (
                        <>
                            <p onClick={() => { handleClick(developer.name) }}>
                                {developer.name} : {developer.votes}
                            </p>
                        </>
                    )
                })

            }

            <button onClick={handleReset} >Reset Votes</button>
        </>
    )



}


export default Developers;
// 1. create the init state

const initState = {
    developers: [
        { name: "Ahmad", votes: 0 },
        { name: "Zaid", votes: 0 },  
        { name: "Raneem", votes: 0 },
    ],
    totalVotes: 0,
}

// 2. create the actions
// increase the votes
export const increase = (name) => {
    return {
        type: "INCREASE",
        payload: name,
    }
}

// reset the votes
export const reset = () => { 
    return {
        type: "RESET",
        payload: null,
    }
}

// 3. create the reducer
const voteReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) { 
        case "INCREASE":
            const newDeveloper = state.developers.map(developer => {
                if(developer.name === payload) {
                    return {
                        name: developer.name,
                        votes: developer.votes + 1,
                   }
                } else {
                    return developer;
                }
             }
            )

            return {
                developers: newDeveloper,
                totalVotes: state.totalVotes + 1,
            }
        case "RESET":
            return initState
        
        default:
            return state;
    }
    
}

export default voteReducer;


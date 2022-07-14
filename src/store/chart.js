const GET_DATA = 'data/GET_DATA'

const getData = data => ({
    type: GET_DATA,
    payload: data
})


export const getDataThunk = () => async dispatch => {
    const res = await fetch('/stackline_frontend_assessment_data_2021.json', {
        headers: {'Accept': 'application/json'}
    })

    if (res.ok) {
        const data = await res.json()
        
        dispatch(getData(data))
        return data
    }
}

const dataReducer = (state = {}, action) => {
    let newState;
    
    switch(action.type){
        case GET_DATA:
            console.log('test')
            newState = {...state}
            
            action.payload.forEach(e => {
                newState[e.id] = e
            })
           
            return newState
        
        default:
            return state
    }
}

export default dataReducer
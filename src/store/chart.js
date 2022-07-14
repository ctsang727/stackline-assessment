const GET_DATA = 'data/GET_DATA'

const getData = data => ({
    type: GET_DATA,
    payload: data
})


export const getDataThunk = () => async dispatch => {
    const res = await fetch('/stackline_frontend_assessment_data_2021.json', {
        headers: {'Accept': 'application/json'}
    })
    // console.log('1', res)
    // console.log('2', res.json())

    if (res.ok) {
        console.log('yep')
        const data = await res.json()
        console.log('111', data)
        
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
           
            console.log('newState', newState)
            return newState
        
        default:
            console.log('default')
            return state
    }
}

export default dataReducer
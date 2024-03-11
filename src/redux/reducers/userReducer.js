const initialState = {
    users: [],
    
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_USER':
            return '';

        case 'REMOVE_USER':
            return '';    
            
        default:
            return state;
    }

}

export default userReducer;
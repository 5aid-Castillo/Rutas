import types from './types';

const miReducer = (state, action) => {
    switch ( action.type ){
        /* types donde especifican las acciones a ejecutar */
        case types.login:
            return {
                logeado: true,
                usuario:action.payload
            }

        case types.logout:
            return {
                logeado:false,
                usuario: null
            }

        default: 
            return state;
    }


}

export default miReducer
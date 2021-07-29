//reducer is a pure function whichhelp toupdate state there is method1.state 2. action

export var Addcakedetail = function (state = {}, action) {

    switch (action.type) {
        case "GET_ALL_CAKE":
            {
                state = { ...state }
                state["cakelist"] = action.payload
                return state
            }

            case "ADD_TO_CART":
                {
                    state = { ...state }
                    state["cartitemlist"] = action.payload
                    return state
                }
        default: return state
    }
}
export var Showlogin = function (state = {
    loginflag: localStorage.token ? true : false
}, action) {
    switch (action.type) {

        case "LOGIN":
            {
                state = { ...state }
                state["loginflag"] = true
                state["user"] = action.payload
                return state
            }
        default: return state
    }
}
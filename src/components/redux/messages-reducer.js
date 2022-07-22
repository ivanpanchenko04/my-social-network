const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    massages: [
        {id: 1, name: "John"},
        {id: 2, name: "Michael"},
        {id: 3, name: "Linda"},
        {id: 4, name: "Jess"},
        {id: 5, name: "Roger"}
    ],
    letters: [
        {id: 1, name: "John", massage: "Hi! How are you?"},
        {id: 2, name: "Michael", massage: "Hi! Thank you, good. And you?"},
        {id: 3, name: "John", massage: "I`m fine. Thanks"}
    ],
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessage = {
                id: 4, name: "John", massage: action.newMassageBody
            };
            return {
                ...state,
                letters: [...state.letters, newMessage]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMassageBody) => ({type: SEND_MESSAGE, newMassageBody})

export default messagesReducer;
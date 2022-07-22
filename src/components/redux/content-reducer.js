import {profileAPI, usersAPI} from "../api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        {id: 1, name: "Johny", massage: "Hi! This is my first post!"},
        {id: 2, name: "Michael", massage: "I like it!"}
    ],
    profile: null,
    status: "",
    info: [
        {id: 1, typeOfInfo: "Name:", text: "Ivan Panchenko"},
        {id: 2, typeOfInfo: "Where:", text: "Uspenka, Oleksandria district, Kirovohrad region, Ukraine"},
        {id: 3, typeOfInfo: "I live:", text: "Cherkassy, Ukraine"},
        {id: 4, typeOfInfo: "Education:", text: "Uspenka School, Cherkassy State Technological University"},
        {id: 5, typeOfInfo: "About myself:", text: "Programmer, student, musician, volunteer. Write in React"}
    ]
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3, name: "Anonymous", massage: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default contentReducer;
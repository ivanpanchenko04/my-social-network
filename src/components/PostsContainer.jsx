import Posts from './Posts';
import {addPostActionCreator} from "./redux/content-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
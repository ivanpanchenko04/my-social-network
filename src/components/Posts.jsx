import React from 'react';
import s from "./Posts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {Textarea} from "./FormsControls/FormsControls";
import avatar from "../img/zhivotnye_igra_sobaka_19261.jpg";

const PostsItem = (props) => {
    return (
        <div className={s.myPosts}>
            <div className={s.avaAndName}>
                <img src={avatar} alt={"Sorry, photo not found"}/>
                <h5>{props.name}</h5>
            </div>
            <div>
                <p>{props.massage}</p>
            </div>
        </div>
    )
}

const Posts = React.memo((props) => {

    let postsElements = props.posts
        .map(post => <PostsItem id={post.id} name={post.name} massage={post.massage} 
            key={post.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.posts}>
            <div className={s.form}>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
})

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder="What are you thinking about?"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "contentAddPostForm"})(AddPostForm)

export default Posts;
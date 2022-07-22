import contentReducer, { addPostActionCreator, deletePost } from "./content-reducer";

let state = {
    posts: [
        {id: 1, name: "Johny", massage: "Hi! This is my first post!"},
        {id: 2, name: "Michael", massage: "I like it!"}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("Hello world!");
    let newState = contentReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("Hello world!");
    let newState = contentReducer(state, action);
    expect(newState.posts[2].massage).toBe("Hello world!");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = contentReducer(state, action);
    expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = contentReducer(state, action);
    expect(newState.posts.length).toBe(2);
});
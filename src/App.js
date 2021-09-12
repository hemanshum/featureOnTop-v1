import React, { useReducer } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Post from "./components/main/Post";

const reducer = (state, action) => {
  switch (action.type) {
    case "newPost":
      return [...state, action.payload];
    case "voteUp":
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, voteCount: post.voteCount + 1 };
        }
        return post;
      });
    case "voteDown":
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, voteCount: post.voteCount - 1 };
        }
        return post;
      });
    default:
      return state;
  }
};

function App(props) {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <div className="form-box">
        <Header />
        <Form onSubmit={dispatch} />
        {state.length > 0 &&
          state
            .sort((a, b) => a.voteCount - b.voteCount)
            .map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                title={post.title}
                date={post.date}
                voteCount={post.voteCount}
                onVoteUp={dispatch}
                onVoteDown={dispatch}
              />
            ))}
      </div>
    </>
  );
}

export default App;

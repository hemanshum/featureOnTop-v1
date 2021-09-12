import Card from "../UI/Card";
import classes from "./Post.module.css";

const Post = (props) => {
  let newDate = props.date;
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const upVoteHandler = () => {
    props.onVoteUp({ type: "voteUp", payload: { id: props.postId } });
  };

  const downVoteHandler = () => {
    props.onVoteDown({ type: "voteDown", payload: { id: props.postId } });
  };

  return (
    <section className={classes.post}>
      <Card>
        <p>{props.title}</p>
        <div>
          <span>
            {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
          </span>
        </div>
        <div className={classes.buttons}>
          <button onClick={upVoteHandler}>👍</button>
          <b>{props.voteCount}</b>
          <button onClick={downVoteHandler}>👎</button>
        </div>
      </Card>
    </section>
  );
};

export default Post;

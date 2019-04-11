import React from "react";
import SingleVideoPost from "./SingleVideoPost";
import SingleImagePost from "./SingleImagePost";
import SingleTextPost from "./SingleTextPost";
import SingleComment from "./SingleComment";

const SinglePostItem = (props) => {

    const postItem = () => {
        if (props.post.type === 'video') {
            return <SingleVideoPost post={props.post} />
        } else if (props.post.type === "image") {
            return <SingleImagePost post={props.post} comments={[]} />
        } else {
            return <SingleTextPost post={props.post} comments={[]} />
        }
    }



    if (!props.comments.length) {
        return (
            <>
                {postItem()}
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea
                                onChange={props.onChangeCommentValue}
                                value={props.commentValue}
                                id="textarea2"
                                className="materialize-textarea"
                                data-length="120">
                            </textarea>
                            <label htmlFor="textarea2"></label>
                            <button onClick={props.onCreateComment} className="right btn">Post Comment</button>
                        </div>
                    </div>
                </form>
                <h1 className="center">No comments</h1>
            </>
        )
    }
    return (
        <>

            {postItem()}
            <form>
                <div className="row">
                    <div className="input-field col s12">

                        <textarea
                            onChange={props.onChangeCommentValue}
                            value={props.commentValue}
                            id="textarea2"
                            className="materialize-textarea"
                            data-length="120">
                        </textarea>

                        <label htmlFor="textarea2"></label>
                        <button onClick={props.onCreateComment} className="right btn">Post Comment</button>
                    </div>
                </div>
            </form>


            {
                props.comments.map(comment => {
                    return <SingleComment comment={comment} key={comment.id} />
                })
            }
        </>
    )

}

export default SinglePostItem;
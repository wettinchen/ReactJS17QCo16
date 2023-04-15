import React from "react";

const NewPost = ({
  handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
  return (
    <main className="NewPost">
        <h2>NewPost</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <br/>
          <input
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(event) => setPostTitle(event.target.value)}
          />
          <br/>
          <label htmlFor="postBody">Post:</label>
          <br/>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(event) => setPostBody(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
    </main>
  )
}

export default NewPost
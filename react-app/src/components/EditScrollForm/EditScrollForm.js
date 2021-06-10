import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addScroll, editScroll } from "../../store/scroll";

import "../addScrollForm/addScrollForm.css";

const EditScrollForm = ({scroll}) => {
  const dispatch = useDispatch();


  const [author, setAuthor] = useState(scroll.author);
  const [title, setTitle] = useState(scroll.title);
  const [published, setPublished] = useState(scroll.published);
  const [body, setBody] = useState(scroll.body);

  // const updateStartDate = (e) => setStartDate(e.target.value);
  // const updateEndDate = (e) => setEndDate(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(author, title, published, body, scroll.id);
    let createdScroll = await dispatch(
      editScroll(author, title, published, body, scroll.id)
    );
  };

  return (
    <form
      key={"id"}
      onSubmit={handleSubmit}
      style={{ display: "none" }}
      id={`add-scroll-${scroll.id}`}
      className="scroll-form"
    >
      <label>Author</label>
      <input
        type="text"
        required
        placeholder={scroll.author}
        value={author}
        id="author"
        onChange={(e) => {
          console.log(author);
          setAuthor(e.target.value);
        }}
      />
      <label>Title</label>
      <input
        type="text"
        required
        placeholder={scroll.title}
        value={title}
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Published</label>
      <input
        type="text"
        required
        placeholder={scroll.published}
        value={published}
        id="published"
        onChange={(e) => setPublished(e.target.value)}
      />
      <label>Body</label>
      <input
        type="text"
        required
        placeholder={scroll.body}
        value={body}
        id="body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Edit Scroll
      </button>
    </form>
  );
};

export default EditScrollForm;

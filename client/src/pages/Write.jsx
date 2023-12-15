import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {

  const state = useLocation().state
  const navigate = useNavigate();

  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');


  const upload = async () => {

    try {
      const formData = new FormData();
      formData.append('file', img);
      const res = await axios.post("/upload", formData)
      return res.data

    } catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await upload();

    try {
      state ? await axios.put(`/posts/${state?.id}`, {
        title,
        desc: value,
        cat,
        img: img ? imageUrl : ""
      })
        : await axios.post(`/posts/`, {
          title,
          desc: value,
          cat,
          img: img ? imageUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        })

    } catch (error) {
      console.log(error)
    }
    navigate("/");
  }





  return <div className="add">
    <div className="content">
      <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
    <div className="menu">
      <div className="item">
        <h1>Publish</h1>
        <span><b>Status: </b>Draft</span>
        <span><b>Visibility: </b>Public</span>
        <input type="file" id="file" style={{ display: "none" }} onChange={e => setImg(e.target.files[0])} />
        <label htmlFor="file" className="file">Upload Image</label>
        <div className="buttons">
          <button>Save as a draft</button>
          <button onClick={handleSubmit}>Publish</button>
        </div>
      </div>
      <div className="item">
        <h1>Category</h1>
        <div className="cat">
          <input type="radio" checked={cat === 'art'} id="art" name="category" value="art" onChange={e => setCat(e.target.value)} />
          <label htmlFor="art">Art</label>
        </div>
        <div className="cat">
          <input type="radio" checked={cat === 'science'} id="science" name="category" value="science" onChange={e => setCat(e.target.value)} />
          <label htmlFor="science">Science</label>
        </div>
        <div className="cat">
          <input type="radio" checked={cat === 'technology'} id="technology" name="category" value="technology" onChange={e => setCat(e.target.value)} />
          <label htmlFor="technology">Technology</label>
        </div>
        <div className="cat">
          <input type="radio" checked={cat === 'cinema'} id="cinema" name="category" value="cinema" onChange={e => setCat(e.target.value)} />
          <label htmlFor="cinema">Cinema</label>
        </div>
        <div className="cat">
          <input type="radio" checked={cat === 'design'} id="design" name="category" value="design" onChange={e => setCat(e.target.value)} />
          <label htmlFor="design">Design</label>
        </div>
        <div className="cat">
          <input type="radio" checked={cat === 'food'} id="food" name="category" value="food" onChange={e => setCat(e.target.value)} />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  </div>
};

export default Write;

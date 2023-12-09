import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)

  return <div className="add">
    <div className="content">
      <input type="text" placeholder="Title" />
      <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
    <div className="menu">
      <div className="item">
        <h1>Publish</h1>
        <span><b>Status: </b>Draft</span>
        <span><b>Visibility: </b>Public</span>
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file" className="file">Upload Image</label>
        <div className="buttons">
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
      </div>
      <div className="item">
        <h1>Category</h1>
        <div className="cat">
          <input type="radio" id="art" name="category" value="art" />
          <label htmlFor="art">Art</label>
        </div>
        <div className="cat">
          <input type="radio" id="science" name="category" value="science" />
          <label htmlFor="science">Science</label>
        </div>
        <div className="cat">
          <input type="radio" id="technology" name="category" value="technology" />
          <label htmlFor="technology">Technology</label>
        </div>
        <div className="cat">
          <input type="radio" id="cinema" name="category" value="cinema" />
          <label htmlFor="cinema">Cinema</label>
        </div>
        <div className="cat">
          <input type="radio" id="design" name="category" value="design" />
          <label htmlFor="design">Design</label>
        </div>
        <div className="cat">
          <input type="radio" id="food" name="category" value="food" />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  </div>
};

export default Write;

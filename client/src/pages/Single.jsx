import React, { useContext, useEffect, useState } from "react";
import Edit from '../images/edit.png'
import Delete from '../images/delete.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from '../context/authContext'
import DOMPurify from "dompurify"

const Single = () => {
  const [post, setPost] = useState({})


  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2]

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)

      } catch (error) {
        console.log(error)
      }
    }

    fetchPost();

  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='single'>
      <div className='content'>
        <img src={`../uploads/${post.img}`} alt="" />
        <div className="user">
          {currentUser?.img &&
            <img src={currentUser.img} alt="" />
          }
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>
          {currentUser?.username === post.username &&
            <div className="edit">
              <Link to={`/write/?edit=${post.id}`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          }
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.desc) }}></p>
      </div>
      <div className='menu'><Menu cat={post.cat} /></div>

    </div >
  );
};

export default Single;


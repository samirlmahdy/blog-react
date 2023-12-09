import React from "react";
import ProfilePic from '../images/profile.jpg'
import Content from '../images/content.jpg'
import Edit from '../images/edit.png'
import Delete from '../images/delete.png'
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src={Content} alt="" />
        <div className="user">
          <img src={ProfilePic} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link to={`/write?delete=2`}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati voluptate pariatur laboriosam sunt assumenda fugit labore perspiciatis. Fuga soluta libero possimus! Distinctio quas consectetur atque rem quae mollitia perspiciatis eum incidunt. Perferendis cum ipsum distinctio cupiditate facilis quisquam qui, odio dolor aliquam autem asperiores officiis reprehenderit sunt obcaecati veritatis tempora expedita? Numquam perspiciatis voluptatibus inventore, odit nihil ab, incidunt iure accusamus optio eius, laudantium tenetur culpa similique repudiandae hic vitae fugiat vero distinctio. Magnam nam adipisci consequatur repudiandae officia omnis fugit repellat quis tenetur, minima maiores? Dolorum, et, magnam nulla ut quibusdam ratione quam, id laudantium sed dolorem nihil.
          <br />
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptatum sed accusamus vel, nostrum illum praesentium. Pariatur maiores recusandae, laboriosam tempora iure consectetur amet quae accusamus quam, distinctio libero rem.</p>
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut similique laboriosam quibusdam, quo cumque, non magnam saepe omnis dolor distinctio sit, fugiat velit perferendis unde! Obcaecati harum fugiat tempora assumenda, facilis maxime doloribus doloremque veritatis quo! Porro nesciunt commodi quasi maiores, ipsam unde nobis molestias voluptatum accusantium aperiam, dolore facilis.</p>
        </p>
      </div>
      <div className='menu'><Menu /></div>

    </div>
  );
};

export default Single;


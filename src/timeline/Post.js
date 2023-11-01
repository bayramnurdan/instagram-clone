import React from 'react';
import "./Post.css";
import pic from "../static/screenshot.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import img from "../static/screenshot.png";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <img src={img} alt="profil_img"/>
                <p className="username"> username</p>
                <div className="switch">
                    <a> ... </a>
                </div>
            </div>
            <img src={pic}/>
            <div class="icons__below__post">
                <div className="icons__left">
                    <FavoriteBorderIcon/>
                    <AddCommentIcon/>
                    <SendIcon/>
                </div>
                <div className="saveicon">
                    <LibraryAddIcon/>
                </div>


            </div>

            <div className="post__definition">
                <div> 97 likes</div>
                nurdan__emin djkhwed g
            </div>
            <div className="post__buttons">
                <a>
                    more...
                </a>
                <a>
                    View all comments
                </a>
                <a>
                    Add a comment
                </a>
            </div>


        </div>
    )
}

export default Post;
import React from "react";
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';

function Sidenav() {
    return (
        <div className="sidenav">
            <img
                className="sidenav__logo"
                src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                alt="Instagram Logo"
            />
            <div className="sidenav__buttons">
                <button
                    className="side__button">
                    <HomeIcon/>
                    <span>Home</span>
                </button>
                <button className="side__button">
                    <SearchIcon/>
                    <span>Search</span>
                </button>
                <button className="side__button">
                    <ExploreIcon/>
                    <span>Explore</span>
                </button>
                <button className="side__button">
                    <SlideshowIcon/>
                    <span>Reels</span>
                </button>
                <button className="side__button">
                    <MessageIcon/>
                    <span>Messages</span>
                </button>
                <button className="side__button">
                    <FavoriteBorderIcon/>
                    <span>Notifications</span>
                </button>
                <button className="side__button">
                    <AddBoxIcon/>
                    <span>Create</span>
                </button>
            </div>
            <div className="sidenav__more">
                <button className="side__button">
                    <MenuIcon/>
                    <span> More</span>
                </button>
            </div>
        </div>
    )
}

export default Sidenav;
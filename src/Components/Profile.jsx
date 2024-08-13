
import { useContext, useState } from 'react';
import { Navbar } from './Navbar'
import './Profile.css'
import prasanth from '../assets/prasanth.jpg'
import { UserContext } from '../UserContext';
const highlights = [
    { id: 1, image: 'https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'User 1' },
    { id: 2, image: 'https://static.bhphotovideo.com/explora/sites/default/files/03-shutterstock_97696616.jpg', name: 'User 2' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGlExc9U4gGVx_7G4MK4O4BhjJHUl9JmdHw&s', name: 'User 3' },
    { id: 4, image: 'https://wallup.net/wp-content/uploads/2016/01/132930-nature-landscape-flowers.jpg', name: 'User 4' },
    
];
const posts = [
    { id: 1, image: 'https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 1' },
    { id: 2, image: 'https://static.bhphotovideo.com/explora/sites/default/files/03-shutterstock_97696616.jpg', name: 'User 2' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGlExc9U4gGVx_7G4MK4O4BhjJHUl9JmdHw&s', name: 'User 3' },
    { id: 4, image: 'https://wallup.net/wp-content/uploads/2016/01/132930-nature-landscape-flowers.jpg', name: 'User 4' },
    { id: 5, image: 'https://via.placeholder.com/150', name: 'User 5' },
    { id: 6, image: 'https://via.placeholder.com/150', name: 'User 6' },
    { id: 7, image: 'https://via.placeholder.com/150', name: 'User 7' },
    { id: 8, image: 'https://via.placeholder.com/150', name: 'User 8' },
    { id: 9, image: 'https://via.placeholder.com/150', name: 'User 9' },
    { id: 10, image: 'https://via.placeholder.com/150', name: 'User 10' },
    { id: 11, image: 'https://via.placeholder.com/150', name: 'User 11' },
    { id: 12, image: 'https://via.placeholder.com/150', name: 'User 12' },
    { id: 13, image: 'https://via.placeholder.com/150', name: 'User 13' },
    { id: 14, image: 'https://via.placeholder.com/150', name: 'User 14' },
    { id: 15, image: 'https://via.placeholder.com/150', name: 'User 15' },
    { id: 16, image: 'https://via.placeholder.com/150', name: 'User 16' },
    { id: 17, image: 'https://via.placeholder.com/150', name: 'User 17' },
    { id: 18, image: 'https://via.placeholder.com/150', name: 'User 18' },
    { id: 19, image: 'https://via.placeholder.com/150', name: 'User 19' },
    { id: 20, image: 'https://via.placeholder.com/150', name: 'User 20' },
];
export const Profile=()=>{
    const [noPosts ,setNoPosts]=useState(false)
    const [Npost ,setNpost]=useState(20)
    const {userInfo, updateUserField} =useContext(UserContext);
    const handleNpost=()=>{
        if(Npost==0)
        {
            setNpost(20)
        }
        else{
            setNpost(0)
        }
    }
    return(
        <>
        <Navbar/>
        <div id="Profile">
            <div id="Profile-head">
                <div id="Profile-div1">
                <div id="Profile-Pic">
                   
                </div>
                </div>
                <div id="Profile-bio">

                    <div id="Profile-name">
                      <h4>{userInfo.email}</h4>
                    </div>
                    <div id="Profile-connections">
                        <div className='Person-status'><div onClick={()=>handleNpost()}><b>{Npost}</b>&nbsp;</div><div>Posts</div></div>
                        <div className='Person-status'><div><b>279</b>&nbsp;</div><div>followers</div></div>
                        <div className='Person-status'><div><b>179</b>&nbsp;</div><div>following</div></div>
                    </div>
                    <div id="Profile-info">
                       <p>It's me Prasanth</p>
                       <p>💻 Tech Enthusiast | Gadget Reviewer<br></br>
🔍 Exploring the latest in tech<br></br>
👇 Latest reviews & tips
[link]
</p>
                    </div>
                </div>

            </div>
            <div id="Profile-highlights">
               {  ( highlights.map((item,ind)=>(
                        <div id='high-Pic'>
                             <div id='high-img'>
                                <img src={item.image}/>
                                </div>
                            </div>
                    )))}
    
            </div>
            <div id="Profile-posts">
                <div id="gallery-head"> 
                <i className="fas fa-bars"></i>&nbsp;
                <p>Posts</p>
                </div>
                
                <div id="Profile-gallery">
                    {
                       <div id="Profile-gallery">
                       {
                           Npost===0 ?(
                            <div id='no-posts'>
                                <img src='https://www.lovelearnings.com/wp-content/uploads/2020/05/no-posts-yet.png' alt='No Posts Yet' />
                            </div>
                        )  : (
                            posts.map((item, ind) => (
                                <div key={ind} id='each-post'>
                                    <img src={item.image} alt={`Post ${ind + 1}`} />
                                </div>
                            ))
                        )
                       }
                   </div>
                    }
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            </div>

        </div>
        </>
    )
}
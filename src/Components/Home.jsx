import React, { useContext, useEffect, useState } from 'react';
import './Home.css'; // Your custom CSS file
import { Navbar } from './Navbar';
import like from '../assets/Likebtn.png';
import comment from '../assets/Comment.png';
import share from '../assets/share.png';
import liked from '../assets/Liked.png';
import NoResultsFound from '../assets/NoResultsFound.png';
import spin from '../assets/Rolling.png'
const stories = [
    { id: 1, image: 'https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'User 1' },
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


const posts = [
    { id: 1, image: 'https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 1', cmt: "🌄 Discover the beauty of nature through my lens. Swipe left to journey through breathtaking landscapes from around the world. 🌍✨ #NaturePhotography #LandscapeLovers #Travel", likes: false,count:19 },
    { id: 2, image: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 2', cmt: "🌅 Sunset magic, capturing the golden hour in all its glory. 🌅✨ #SunsetLovers #GoldenHour #NatureLovers", likes: false },
    { id: 3, image: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 3', cmt: "🍃 A walk through the tranquil forest, where every step brings peace. 🌲🌿 #ForestWalk #NaturePeace #Tranquility", likes: false },
    { id: 4, image: 'https://images.pexels.com/photos/462146/pexels-photo-462146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 4', cmt: "🏞️ The grandeur of the mountains, standing tall and proud. 🏔️❤️ #MountainViews #NatureLovers #AdventureAwaits", likes: false },
    { id: 5, image: 'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 5', cmt: "🌫️ Enveloped in mist, the world feels like a dream. 🌫️✨ #MistyMorning #NatureMystery #Dreamy", likes: false },
    { id: 6, image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 6', cmt: "🦁 The king of the jungle in his natural habitat. 🦁❤️ #WildlifePhotography #KingOfTheJungle #NatureLovers", likes: false },
    { id: 7, image: 'https://images.pexels.com/photos/1050058/pexels-photo-1050058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 7', cmt: "🌺 Blooming with beauty, flowers that brighten up the day. 🌸💐 #FlowerPower #NatureBliss #BeautyInBloom", likes: false },
    { id: 8, image: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 8', cmt: "🌊 Waves crashing against the shore, the sound of peace. 🌊✨ #BeachVibes #OceanLovers #NatureSound", likes: false },
    { id: 9, image: 'https://images.pexels.com/photos/360142/pexels-photo-360142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 9', cmt: "🌻 Sunflowers turning their heads to the sun, a symbol of hope. 🌻🌞 #SunflowerField #NatureHope #Sunshine", likes: false },
    { id: 10, image: 'https://images.pexels.com/photos/1420703/pexels-photo-1420703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 10', cmt: "🌌 Under the starlit sky, the universe unfolds its mysteries. 🌌✨ #StarGazing #NightSky #UniverseWonder", likes: false },
    { id: 11, image: 'https://images.pexels.com/photos/355201/pexels-photo-355201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 11', cmt: "🏝️ Paradise found on a secluded island, where the ocean meets the sky. 🏝️🌊 #IslandLife #ParadiseFound #NatureEscape", likes: false },
    { id: 12, image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 12', cmt: "🌾 Fields of gold, swaying gently in the wind. 🌾🍂 #GoldenFields #NatureHarvest #Peaceful", likes: false },
    { id: 13, image: 'https://images.pexels.com/photos/1054014/pexels-photo-1054014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 13', cmt: "⛺ Camping under the stars, nature's lullaby. ⛺✨ #CampingLife #NatureNight #Adventure", likes: false },
    { id: 14, image: 'https://images.pexels.com/photos/1712078/pexels-photo-1712078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 14', cmt: "🌺 Tropical paradise, where the flora is as vibrant as the sunset. 🌺🌴 #TropicalBliss #NatureColors #Escape", likes: false },
    { id: 15, image: 'https://images.pexels.com/photos/1575693/pexels-photo-1575693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 15', cmt: "🍂 Autumn leaves painting the world in warm hues. 🍂🍁 #AutumnVibes #NaturePalette #SeasonChange", likes: false },
    { id: 16, image: 'https://images.pexels.com/photos/1149814/pexels-photo-1149814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 16', cmt: "❄️ Winter wonderland, where every flake tells a story. ❄️☃️ #WinterMagic #NatureWonderland #SnowDay", likes: false },
    { id: 17, image: 'https://images.pexels.com/photos/358485/pexels-photo-358485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 17', cmt: "🌞 Sunshine spilling over the hills, a new day begins. 🌞⛰️ #MorningGlory #NatureSunrise #NewDay", likes: false },
    { id: 18, image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 18', cmt: "🌵 Desert beauty, where the sands whisper tales of time. 🌵🏜️ #DesertDreams #NatureSilence #EternalBeauty", likes: false },
    { id: 19, image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 19', cmt: "🌊 The ocean's embrace, where the soul finds peace. 🌊💙 #OceanBreeze #NatureHealing #Calm", likes: false },
    { id: 20, image: 'https://images.pexels.com/photos/165974/pexels-photo-165974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100vh', name: 'User 20', cmt: "🌿 Nature's sanctuary, where the heart finds solace. 🌿💚 #NatureSanctuary #GreenPeace #QuietMoments", likes: false }
];

const StoryPreview = () => {
   const [likebtn,setLike]=useState(false)
   const [searchData, setSearchData] = useState('');
   const [spinner,setSpinner] =useState(true)
   const [count,setCount]=useState(0)
   
   const handleLikes=()=>{
   
    if (!likebtn) {
        setCount((val) => val + 1);
    } else {
        setCount((val) => val - 1);
    }
    setLike((val)=>!val)
    
   }

   useEffect(()=>{
    setTimeout(()=>{
          setSpinner(false)
    },1200)
   },[])
  

    return (<>
     <Navbar onSearch={setSearchData}/>
      {spinner? <div id="Spinner"><img src={spin}/></div> :<>{ searchData==='' ? <div className='Home-div'>
        <div className="stories">
            
            {stories.map(story => (
                    <div key={story.id} className="story-preview">
                        <div className="story-image-container">
                            <img src={story.image} alt={story.name} className="story-image" />
                        </div>
                        <p className="story-name">{story.name}</p> 
                    </div>
                ))}
            
        </div>
        
        <div className='Posts'>
            {
                posts.map((item,ind)=>(
         
                    
                    <div key={ind} className='Post-con'>
                        <div className='Post-header'>
                            <div className='Post-profile'>
                                <div className='inner-circle'>
                                    </div>
                                </div>
                                <div className='post-username'>
                            <p>{item.name}</p>
                            </div>
                            </div>
                      <div className='Post-img'>
                        <img src={item.image} alt={item.name} />
                        </div>
                        <div className='Post-matter'>
                          <div id='symbols'>
                            {!likebtn ?<img src={like} onClick={handleLikes}/>:<img src={liked} onClick={handleLikes}/>}
                            <img src={comment}/>
                            <img src={share}/>
                            </div>
                            <div>
                                <p>{count} likes</p>
                                <p>{item.cmt}</p>
                                </div>
                        </div>
                        </div>
                     )
                )
                
            }

        </div>
        </div> : posts.filter(item => item.cmt.toLowerCase().includes(searchData.toLowerCase())).length===0 ?<div className='NoResultsFound'>
            <div>
            <img src={NoResultsFound}/>
            <div id="search-not-matter"><h2>Search Not Found</h2>
            <p>try different keywords or search again</p>
            </div>
            
            </div>
            
        </div> :<div className='Home-div' ><div className='Posts'>
            <h3>Search Results</h3>
            {
            
        posts.filter(item => item.cmt.toLowerCase().includes(searchData.toLowerCase())).map((item,ind)=>(
         
                    
         <div key={ind} className='Post-con'>
             <div className='Post-header'>
                 <div className='Post-profile'>
                     <div className='inner-circle'>
                         </div>
                     </div>
                     <div className='post-username'>
                 <p>{item.name}</p>
                 </div>
                 </div>
           <div className='Post-img'>
             <img src={item.image} alt={item.name} />
             </div>
             <div className='Post-matter'>
               <div id='symbols'>
                 {likebtn ?<img src={like} onClick={()=>{setLike(!likebtn)}}/>:<img src={liked} onClick={()=>{setLike(!likebtn)}}/>}
                 <img src={comment}/>
                 <img src={share}/>
                 </div>
                 <div>
                     <p>0 likes</p>
                     <p>{item.cmt}</p>
                     </div>
             </div>
             </div>
          )
     )}</div></div>
    } </>}
        </>
    );
}

export default StoryPreview;

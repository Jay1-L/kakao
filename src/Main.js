import React from 'react'
import './Main.scss'
import ProfileHeader from './Pages/Main/ProfileHeader/ProfileHeader'
import ProfileSection from './Pages/Main/ProfileSection/ProfileSection'
import Portrait from './Pages/Main/Protrait/Portrait'
// import { useMediaQuery } from "react-responsive"

function Main() {

  // const isProfileShrink = useMediaQuery ({
  //   query: "(min-width:768px)"
  // });
  
  // const Profile = isProfileShrink ? "profile" : "profileShrink" 
  
  return (
    <div>
      <div class="Main" >
        <Portrait/>
        <div class ="profilebox">
          <ProfileHeader/>
          <ProfileSection/> 
        </div>    
      </div>
    </div>
  )
}

export default Main

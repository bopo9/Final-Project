import React from "react";
import Feed from "./Feed";


const ProfileComponent = props => (
   <div className={'profile'}>
       <div className={'profile__header'}>
           <img className={'profile__photo'}
                src="https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg" alt="avatar"/>
           <div className={'profile__main'}>
               <span className={'profile__user user_name'}>First name</span>
               <span className={'profile__user user_name'}>Last Name</span>
           </div>
       </div>
       <Feed profile={true} />
   </div>

);

export default ProfileComponent;
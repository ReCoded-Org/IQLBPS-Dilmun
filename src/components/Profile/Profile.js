<<<<<<< HEAD
import React  from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Dialog } from '@headlessui/react'
=======
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
>>>>>>> 467d6992bc6e4918f5acebaad87bcfa9b552fcce
import { user } from '../../features/user/userSlice';
import { auth } from '../../firebase-config';
import { ADD_ITEM_ROUTE } from '../../route';
<<<<<<< HEAD
import defaultProfileImg from "../../assets/img/defaultProfileImg.jpg";
import defaultBGImg from "../../assets/img/defaultBGImg.jpg";
import CustomItemCard from "../CustomComponents/CustomItemCard";
 import Form from "./Form";
// import axios from "axios";

 function Profile(){
    const userData = useSelector(user) ;
    // const address =JSON.stringify(userData.address)  ;
    // console.log("user address = ", address);
    // let [isOpen, setIsOpen] = useState(false);
    // function closeModal() {
    //     setIsOpen(false)
    //   }
    
      function openModal() {
       // setIsOpen(true)
      }

    return(
        <div data-testid="profile" className="mt-5 bg-background bg-signin-background bg-cover w-full min-h-[100vh] flex flex-col justify-center items-center content-center">

            <div className=" mt-5 mb-14 w-5/6 bg-background rounded-lg h-96">
                <div className="flex flex-col justify-center items-center rounded-lg ">  
                    <img src={defaultBGImg} alt="Background Img" className="bg-cover bg-center w-full min-h-[20vh] md:min-h-[40vh] rounded-lg "/>
                    <img src={defaultProfileImg} alt="Profile Img" className="rounded-full w-36 absolute flex outline outline-background  min-h-[15vh] md:min-h-[30vh] min-w-[15vh] md:min-w-[30vh]"/>
                </div>
                <div className="flex flex-col items-center justify-center content-center  mb-14 bg-background rounded-lg  pt-4">
                    <h1 className="font-bold text-[20px] sm:text-[26px] lg:text-[34px] text-primary m-1">{userData.firstName} {userData.lastName}</h1>
                    <h3 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary m-1"> Country, City</h3>

                    <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary flex flex-row m-1">{ auth.currentUser.email } 
                        <button type="button" onClick={openModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3"  >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </button>
                    </h5>


                    <div className=" items-center divide-x border-t border-primary ">
                        <div className="flex-grow border-t border-primary divide-x" />
                        <h3 className="flex-shrink mx-16 font-bold text-[14px] sm:text-[18px] lg:text-[24px] text-primary mt-3 mb-3">My Items</h3>
                    </div>      
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-5">
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                        <CustomItemCard />
                    </div>
                    <Form />
                    <Link to={ADD_ITEM_ROUTE}> <button type="button" className ="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"> Add New Item </button></Link>
                </div>   
            </div>
=======
import defaultProfileImg from '../../assets/img/defaultProfileImg.jpg';
import defaultBGImg from '../../assets/img/defaultBGImg.jpg';
import CustomItemCard from '../CustomComponents/CustomItemCard';
// import Form from "./Form";
// import axios from "axios";

function Profile() {
  const userData = useSelector(user);
  //  const userEmail = auth.currentUser.email
  const [email, setEmail] = useState();

  useEffect(() => {
    if (!_.isEmpty(userData)) {
      setEmail(auth.currentUser.email);
    }
  }, [email]);
  // const address =JSON.stringify(userData.address)  ;
  // const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(defaultProfileImg);
  //  const [selectedBGImg , setSelectedBGImg] = useState(defaultBGImg);

  function handleSelectProfile(e) {
    // console.log(e.target.files[0])
    setSelectedImg(e.target.files[0]);
  }
  // function handleSelectBG(e) {
  //     // console.log(e.target.files[0])
  //      setSelectedBGImg(e.target.files[0])  ;
  //      }

  return (
    <div
      data-testid="profile"
      className="mt-5 bg-background bg-signin-background bg-cover bg-no-repeat w-full min-h-[100vh] flex flex-col justify-center items-center content-center"
    >
      <div className=" mt-5 mb-14 w-5/6 bg-background rounded-lg h-96">
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            src={defaultBGImg}
            alt="Background Img"
            className="bg-cover bg-center w-full min-h-[20vh] md:min-h-[40vh] rounded-lg "
          />
          <img
            src={selectedImg}
            alt="Profile Img"
            className="rounded-full w-36 absolute flex outline outline-background  min-h-[15vh] md:min-h-[30vh] min-w-[15vh] md:min-w-[30vh]"
          />
>>>>>>> 467d6992bc6e4918f5acebaad87bcfa9b552fcce
        </div>
        <div className="flex flex-col items-center justify-center content-center  mb-14 bg-background rounded-lg  pt-4">
          <h1 className="font-bold text-[20px] sm:text-[26px] lg:text-[34px] text-primary m-1">
            {userData.firstName} {userData.lastName}
          </h1>
          <h3 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary m-1">
            {' '}
            Country, City
          </h3>

<<<<<<< HEAD
)}
=======
          <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary flex flex-row m-1">
            {' '}
            {email}
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </h5>

          <div className=" items-center divide-x border-t border-primary ">
            <div className="flex-grow border-t border-primary divide-x" />
>>>>>>> 467d6992bc6e4918f5acebaad87bcfa9b552fcce

            <h3 className="flex-shrink mx-16 font-bold text-[14px] sm:text-[18px] lg:text-[24px] text-primary mt-3 mb-3">
              My Items
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-5">
            <CustomItemCard />
            <CustomItemCard />
            <CustomItemCard />
            <CustomItemCard />
            <CustomItemCard />
          </div>
          <Link to={ADD_ITEM_ROUTE}>
            {' '}
            <button
              type="button"
              className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
            >
              {' '}
              Add New Item{' '}
            </button>
          </Link>
          {/* this button will be removed it's just to keep the handle image function */}
          <button
            type="button"
            onClick={handleSelectProfile}
            className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
          >
            {' '}
            dump button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import ProfileImg1 from "../../assets/img/profileImg1.jpg";
import CustomItemCard from "../CustomComponents/CustomItemCard";

function Profile(){
    function handleAddItemForum(){

    }
    return(
        
        <div className="my-12 bg-background bg-signin-background bg-cover bg-no-repeat w-full min-h-[100vh] flex flex-col justify-center items-center content-center">
            <div className="p-5 mt-14 mb-14 w-5/6 items-center justify-center bg-background rounded-lg flex flex-col">
                <img src={ProfileImg1} alt="DefaultProfileImg" className="rounded-full w-36"/>
                <h1 className="font-bold text-[20px] sm:text-[26px] lg:text-[34px] text-primary">User Name</h1>
                <h3 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary">Country, City</h3>
                <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary">Contact No. </h5>
                <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary">Email </h5>
                <p className="divide-y divide-dashed" />
                <h3 className="font-bold text-[14px] sm:text-[18px] lg:text-[24px] text-primary">My Items</h3>
                <div className="flex flex-row flex-wrap items-center justify-center ">
                    { /* Basically we shouldn't do this , we should call the component CustomItemCard and fetch the items ffrom the database but I did this just to show the case how it looks  */}
                    {/* <div className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-background bg-primary p-6 m-2">Item 1</div>
                    <div className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-background bg-primary p-6 m-2">Item 2</div>
                    <div className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-background bg-primary p-6 m-2">Item 3</div>
                    <div className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-background bg-primary p-6 m-2">Item 4</div>
                    <div className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-background bg-primary p-6 m-2">Item 5</div>
                    <div className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-background bg-primary p-6 m-2">Item 6</div> */}
                    <CustomItemCard /> 
                    <CustomItemCard />
                    <CustomItemCard />
                    <CustomItemCard />
                </div>
                {/* <button type="button" onClick={handleAddItemForum} className ="bg-tertiary font-semibold p-2 m-2 hover:shadow-lg text-white font-semibold rounded-lg  sm:w-auto "> Add New Item </button> */}
                    <button type="button" onClick={handleAddItemForum} className ="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"> Add New Item </button>
            </div>
        </div>

)}

export default Profile;
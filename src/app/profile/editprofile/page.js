"use client"
import GetCookie from '../../../components/getCookie/GetCookie';
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const EditProfile = () => {
  const [user,setUser]=useState("");
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;

  useEffect(() => {
  
    const getProfile = async () => {
      try {
        const res = await axios.get(
          "https://we-out-backend.vercel.app/api/profile",
          { headers: { Authorization: token } }
        );
        setUser(res.data.user)
      } catch (err) {
        console.log(err)
      }
    };
    getProfile();
  }, []);

  const prevImage=user.image?user.image:"/prof.jpg";
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef();
  const [uploadData, setUploadData] = useState();
  const [warn, setWarn] = useState(false);
  const [submit,setSubmit]=useState("Submit");

  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    const file = changeEvent.target.files[0];

    reader.onload = function (onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
        setUploadData(undefined);
        setWarn(false);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}


  const [mispass,setMissPass]=useState(false)
  const [notmatch, setNotMatch]=useState(false)
  const nameref=useRef();
  const goalsref=useRef();
  const addressref=useRef();
  const emailref=useRef();
  const oldPassRef=useRef();
  const confPassRef=useRef();
  const newPassRef=useRef();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setSubmit("Submiting...")
    const name=nameref.current.value;
    const goals=goalsref.current.value;
    const address=addressref.current.value;
    const email=emailref.current.value;
    const images=imageSrc===null?[user.image]:[];
    const oldPassword=oldPassRef.current.value;
    const confPassword=confPassRef.current.value;
    const newPassword=newPassRef.current.value;

      if(newPassword!==confPassword)
      {
        setMissPass(true)
      }
      else if(oldPassword!==""&&newPassword!=="")
      {
        const body={
          oldPassword,
          newPassword
        }
        try{
          const res = await axios.post(
            "https://we-out-backend.vercel.app/api/update-pass",
            body,
            { headers: { Authorization: token } }
          );
          
          if(res.data.status===200)
            {
              oldPassRef.current.value="";
              newPassRef.current.value="";
              confPassRef.current.value="";
            }
        }
        catch(err)
        {
          setNotMatch(true)
        }
      }
      if (imageSrc!==null) {
        const formData = new FormData();
        formData.append("file", imageSrc);
        formData.append("upload_preset", "my-upload");
      
        try {
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dgav9ohkf/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.json();
          console.log(data);
          images.push(data.url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }

      const body={
        name,
        goals,
        address,
        email,
        image:images[0]
      }
      try{
        const res = await axios.put(
          "https://we-out-backend.vercel.app/api/update-profile",
          body,
          { headers: { Authorization: token } }
        );
        
        if(res.data.status===200)
          {
            document.cookie=token+"="+JSON.stringify(res.data.updatedData)+"; max-age=86400";
            location.reload();
          }
      }
      catch(err)
      {
        
      }
      // }
      location.reload();
    }
  
  return (
    <div className='p-2 md:p-5'>
      <div className='border-b-[1px] border-[#676767] pb-2'>
        <span className='text-sm font-semibold'>Edit Profile</span>
      </div>
      <form onSubmit={handleSubmit} className='pt-4 text-xs md:text-sm'>
        <span className=''>Profile Photo</span>
        <div className='flex justify-center'>
          <div>
            <Image className='h-[60px] w-[60px] md:h-[110px] md:w-[110px] rounded-full bg-cover' width={1000} height={1000} src={imageSrc===null?prevImage:imageSrc}></Image>
            <div className='cursor-pointer bg-white w-fit relative left-10 -top-3 md:-top-5 md:left-16 p-0.5 md:p-1 rounded-full'>
            <label className='cursor-pointer'
            for="prof"
            >
              <Image className='h-[10px] w-[10px] md:h-[20px] md:w-[20px]' height={1000} width={1000} src={"/cam.png"}></Image>
            </label>
            <input 
              className='hidden'
              name="file"
              ref={imageRef}
              id="prof"
              onChange={handleOnChange}
              type='file'>
            </input>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-wrap gap-2 justify-between'>
            <div className='flex flex-col gap-1'>
              <h4 className=''>Name</h4>
              <input ref={nameref} className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.name}></input>
            </div>
            <div className='flex flex-col gap-1'>
              <h4 className=''>Goals</h4>
              <input ref={goalsref} className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.goals}></input>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className=''>Address</h4>
            <textarea ref={addressref} rows={3} className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.address!==null?user.address:"Address"}></textarea>
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className=''>Email</h4>
            <input ref={emailref} type='email' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.email}></input>
          </div>
          <div className='bg-[#1B1B1B] px-3 py-3'>
            <div className='pb-5'>
              <h4>Change Password</h4>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <h4 className=''>Current Password</h4>
                <input ref={oldPassRef} type='password' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' placeholder='Current Password'></input>
              </div>
              <div className='flex flex-col gap-1'>
                <h4 className=''>New Password</h4>
                <input ref={newPassRef} minLength={8} type='password' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' placeholder='New Password'></input>
              </div>
              <div className='flex flex-col gap-1'>
                <h4 className=''>Confirm New Password</h4>
                <input ref={confPassRef} type='password' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' placeholder='Confirm New Password'></input>
                {mispass&&<span className='text-xs text-red-700'>Passwords dont match</span>}
                {notmatch&&<span className='text-xs text-red-700'>Old and Current Passwords dont match</span>}
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center md:justify-end'>
            <button type='submit' className='border-[1px] border-[#676767] px-3 py-2'>{submit}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
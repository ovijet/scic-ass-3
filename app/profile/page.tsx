'use client';

import React, { useState, useEffect } from 'react';
import {
  FiEdit2,
  FiSave,
  FiX,
  FiMail,
  FiLoader,
} from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const CrownIcon = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L5 12L12 6L19 12L22 4L17 18H7L2 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8000';

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!user) return;
    setName(user.name || '');
    setPhotoURL(user.image || '');
  }, [user]);

  const handleUpdateProfile = async () => {
    // if (!name.trim()) {
    //   toast.error("Name cannot be empty");
    //   return;
    // }

    // setIsUpdating(true);
    // try {
    //   const res = await fetch(`${serverUrl}/profile/update/${user.id}`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, image: photoURL }),
    //   });

    //   if (res.ok) {
    //     toast.success('Profile updated successfully');
    //     setIsEditing(false);
    //   } else {
    //     throw new Error('Update failed');
    //   }
    // } catch (err) {
    //   console.error(err);
    //   toast.error('Sync failed');
    // } finally {
    //   setIsUpdating(false);
    // }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center">
        <FiLoader className="text-[#2A4D38] animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center p-4 font-sans selection:bg-[#2A4D38] selection:text-white">
      <Toaster position="top-center" />
      
      {/* --- PROFILE CARD START --- */}
      <section className="w-full max-w-[500px] bg-white border border-gray-100 rounded-[35px] shadow-2xl shadow-gray-200/50 relative overflow-hidden pb-10">
        
        {/* Top Green Banner */}
        <div className="h-36 bg-[#2D5A43]" />
        
        {/* Avatar Area */}
        <div className="relative -mt-16 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-[5px] border-white shadow-lg bg-[#F7F6F4] flex items-center justify-center">
            {photoURL ? (
              <img
                src={photoURL}
                alt={name || user?.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  setPhotoURL('');
                }}
              />
            ) : (
              <span className="text-3xl font-serif text-[#2A4D38] font-bold">
                {(name || user?.name || 'A').slice(0, 1).toUpperCase()}
              </span>
            )}
          </div>
          {/* {user?.plan === 'premium' && (
            <div className="absolute bottom-1 right-[190px] bg-[#2A4D38] border-2 border-white p-1.5 rounded-full text-white shadow-md">
              <CrownIcon className="w-3.5 h-3.5" fill="currentColor" />
            </div>
          )} */}
        </div>

        {/* Content Section */}
        <div className="mt-5 px-8 flex flex-col items-center text-center">
          
          {/* Member Badge
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#F1F3F5] text-[#5C6E7E] mb-5">
            {user?.plan === 'premium' ? '👑 Premium Member' : '👀 Free Member'}
          </span> */}

          {/* Edit Conditional Rendering */}
          {isEditing ? (
            <div className="space-y-3 w-full text-left mb-4">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-[#F7F6F4] border border-[#E1E5E1] p-2.5 rounded-xl outline-none focus:border-[#2A4D38] text-sm text-[#1E3326]"
              />
              <input
                type="text"
                value={photoURL}
                onChange={e => setPhotoURL(e.target.value)}
                placeholder="Avatar URL"
                className="w-full bg-[#F7F6F4] border border-[#E1E5E1] p-2.5 rounded-xl outline-none focus:border-[#2A4D38] text-sm text-[#1E3326]"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleUpdateProfile}
                  disabled={isUpdating}
                  className="flex-1 bg-[#2A4D38] text-white py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#1E3326] transition-all"
                >
                  {isUpdating ? <FiLoader className="animate-spin" /> : <FiSave />} Save
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setName(user?.name || '');
                    setPhotoURL(user?.image || '');
                  }}
                  className="flex-1 border border-gray-200 text-gray-500 py-2 rounded-xl text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-1"
                >
                  <FiX /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Name */}
              <h1 className="text-3xl font-serif font-bold text-[#11311F] tracking-tight">
                {name || user?.name}
              </h1>
              
              {/* Email */}
              <div className="flex items-center justify-center gap-2 text-[#7F8E84] text-sm mt-2 font-medium">
                <FiMail className="w-4 h-4 text-[#A1B0A6]" />
                <span>{user?.email}</span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setIsEditing(true)}
                className="mt-8 w-full border border-gray-200 hover:border-[#2A4D38] hover:bg-gray-50 text-[#495B50] font-semibold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <FiEdit2 className="w-3.5 h-3.5" />
                <span>Edit Profile Details</span>
              </button>
            </>
          )}

        </div>
      </section>
      {/* --- PROFILE CARD END --- */}

    </div>
  );
};

export default UserProfile;
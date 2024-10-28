"use client";
import { rubikFont } from '@/app/fonts/fontsConfig';
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import ImageListComponent from '@/app/components/client-components/about-components/ImageListComponent';
import WinnersComponent from '@/app/components/client-components/polls-component/WinnersComponent';
import { IPollsDataBase, IwinnersDataBase } from '@/app/interfaces/client-interfaces/PollsInterfaces';
import PollsCategoryComponent from '@/app/components/client-components/polls-component/PollsCategoryComponent';

const PageIndex = () => {
    const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
    const dispatch= useDispatch();
    const [voteClothes, setVoteClothes]= useState<string>("");
    const [voteShoes, setVoteShoes]= useState<string>("");
    const [voteAccessories, setVoteAccessories]= useState<string>("");


    const winnersData: IwinnersDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            title: "Clothes Designer",
            votes: 500,
            userName: "Danjuma Buremo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Shoes Designer",
            votes: 234,
            userName: "Lakasegbe Onyeka",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Accessories Designer",
            votes: 411,
            userName: "Chinyere Damudu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },
    ];


    
    const userVoteClothData: IPollsDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"wyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/3.webp'
        },

        {
            id:"fhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "pwouiensfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },

        {
            id:"afhyohcwyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"akfojisdffhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },
    ];

    const userVoteShoeData: IPollsDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"wyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/3.webp'
        },

        {
            id:"fhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "pwouiensfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },

        {
            id:"afhyohcwyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"akfojisdffhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },
    ];

    const userVoteAccessoryData: IPollsDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"wyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/3.webp'
        },

        {
            id:"fhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "pwouiensfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },

        {
            id:"afhyohcwyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"akfojisdffhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },
    ];

    useEffect(() => {
        dispatch(setNavValue({action: "Polls"}));
      });



      const images= [
        '/images/pictures/1.webp',
        '/images/pictures/2.webp',
        '/images/pictures/3.webp'
      ]
    
      const content= `Have Your Say! Participate in our Online Polls and let your voice be heard. Cast your vote, see instant results, and be part of shaping decisions that matter. Your opinion counts!`
    


    
    return (
        <div className={`${rubikFont.className} -mt-[80px] gap-y-6 flex flex-col`}>

            <ImageListComponent title='Polls' content={content} images={images}/>

            <div className='w-[75%] mx-auto flex flex-col items-center gap-y-[150px]'>
                
                <WinnersComponent winnersData={winnersData}/>

                <PollsCategoryComponent title="Clothes" pollsData={userVoteClothData} voteCategory={voteClothes} setVoteCategory={setVoteClothes}/>

                <PollsCategoryComponent title="Shoes" pollsData={userVoteClothData} voteCategory={voteShoes} setVoteCategory={setVoteShoes}/>

                <PollsCategoryComponent title="Accessories" pollsData={userVoteAccessoryData} voteCategory={voteAccessories} setVoteCategory={setVoteAccessories}/>


            </div>

        </div>
    );
}

export default PageIndex
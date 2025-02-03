import React from "react";
import '../index.css'

const Main: React.FC = () => {

    const playlist = [
        {
            name: 'Boas festas',
            img: '/assets/playlist/1.jpeg',
            color:'#006350'
        },
        {
            name: 'Feitos para você',
            img: '/assets/playlist/2.png',
            color:'rgb(132, 0, 231)'
        },
        {
            name: 'Lançamentos',
            img: '/assets/playlist/3.jpeg',
            color:'rgb(30, 50, 100)'
        },
        {
            name: 'Creators',
            img: '/assets/playlist/4.jpeg',
            color:'rgb(140, 25, 50)'
        },
        {
            name: 'Para treinar',
            img: '/assets/playlist/5.jpeg',
            color:'rgb(232, 17, 91)'
        },
        {
            name: 'Podcasts',
            img: '/assets/playlist/6.jpeg',
            color:'rgb(83, 122, 161)'
        },
        {
            name: 'Sertanejo',
            img: '/assets/playlist/7.jpeg',
            color:'rgb(142, 102, 172)'
        },
        {
            name: 'Samba e Pagode',
            img: '/assets/playlist/8.jpeg',
            color:'rgb(20, 138, 8)'
        },
        {
            name: 'Funk',
            img: '/assets/playlist/9.jpeg',
            color:'rgb(30, 50, 100)'
        },
        {
            name: 'MPB',
            img: '/assets/playlist/10.jpeg',
            color:'rgb(233, 20, 41)'
        },
        {
            name: 'Rock',
            img: '/assets/playlist/11.jpeg',
            color:'rgb(80, 55, 80)'
        },
        {
            name: 'HipHop',
            img: '/assets/playlist/12.jpeg',
            color:'rgb(216, 64, 0)'
        },

    ];
    

    const currentHour = new Date().getHours();

    const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom Dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa Tarde"
    : "Boa Noite";

  return (
    <div className="bg-[#121212] rounded-xl p-5 max-h-[85vh] text-white overflow-hidden ">
      <div id="container_search">
      <h1 style={styles.titulo}>{greetingMessage} </h1>
      <p className="text-[24px] font-bold mb-10" >Navegar por todas as seções</p>
      <section  className="grid grid-cols-5 gap-2 relative overflow-y-auto max-h-[60vh] scrollbar-transparent ">
      {playlist.map((item, index) => (
          <div style={{backgroundColor:item.color}}
          key={index} className="relative rounded-xl h-52 overflow-hidden">
            <img src={item.img} alt={item.name} className="w-32 absolute bottom-0 -right-4 rotate-35" />
            <span className="text-[20px] p-4 absolute  font-bold mb-10">{item.name}</span>
          </div>
        ))}
      </section>
      </div>
     
      <section className="hidden  " id="results"> 
        
     

      </section>
    
    </div>
  );
};

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  titulo: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#fff",
  },
};

export default Main;

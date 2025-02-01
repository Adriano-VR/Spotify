import React from 'react';
import spo from "../assets/icons/favicon.png"
import search from "../assets/icons/search.png"


const Header: React.FC = () => {
    return (
        <header className='flex justify-between p-3 items-center'>
            <div>
                <img src={spo} alt="ada"  width={40}/>
            </div>

            <div className='flex items-center font-bold text-[#B3B3B3] tracking-wider '>

                <div className='flex items-center justify-between relative '>
                    <input 
                        type="text" 
                        placeholder='O que Voce Quer Ouvir?' 
                        className='p-2 pl-14 rounded-full outline-white transition duration-300 w-96 h-12 bg-[#1f1f1f] placeholder-[#b3b3b3]' 
                    />
                    <img src={search} alt="" className='absolute left-4 top-1/2 transform -translate-y-1/2' />
                </div>
               
                <ul className='mx-10 flex gap-5 '>  
                    <li className='hover:text-white cursor-pointer duration-100'>Premium</li>
                    <li className='hover:text-white cursor-pointer duration-100'>Suporte</li>
                    <li className='hover:text-white cursor-pointer duration-100'>Baixar</li>
                </ul>
                <div className='mr-10'>
                    |
                </div>
                <ul className='flex gap-5 items-center '>
                    <li className='hover:text-white cursor-pointer duration-100'>Instalar aplicativo</li>
                    <li className='hover:text-white cursor-pointer duration-100' >Inscrever-se</li>
                    <li className='bg-white p-3 rounded-3xl text-black font-bold'>
                        <button type='submit' className='w-20'>Entrar</button>
                    </li>
                </ul>
            </div>
                
        </header>
    );
};

export default Header;
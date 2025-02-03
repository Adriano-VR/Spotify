import React, { useEffect, useState } from 'react';
import spo from "/assets/icons/favicon.png"
import search from "/assets/icons/search.png"


const Header: React.FC = () => {
    const [div, setDiv] = useState<HTMLElement | null>(null);
    const [resultArtist, setresultArtist] = useState<HTMLElement | null>(null);


    useEffect(() => {
        setDiv(document.getElementById('container_search'));
        setresultArtist(document.getElementById('results'));
    }, []);

    function requestApi(searchTerm: string) {

        if (searchTerm === '') {
            div?.classList.remove('hidden');
            resultArtist?.classList.add('hidden');

            return;
        }
        div?.classList.add('hidden');

        fetch("http://localhost:3001/artists")
        .then((response) => response.json())
        .then((results) => {
            const filteredResults = results.filter((artist: { name: string }) =>
                artist.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            display(filteredResults);
        })
        .catch((error) => console.error("Erro na API:", error));
    
          

            
    }

    const display = (results: { urlImg: string; name: string }[]) => {
        if (!resultArtist) return; 
    
        // Limpa os resultados anteriores
        resultArtist.innerHTML = '';
    
        if (results.length === 0) {
            resultArtist.innerHTML = '<p class="text-white">Nenhum artista encontrado.</p>';
            return;
        }
    
        // Adiciona os artistas encontrados
        results.forEach((artist) => {
            const artistDiv = document.createElement('div');
            artistDiv.classList.add('inline-block','pr-5','text-center');
    
            const img = document.createElement('img');
            img.classList.add('h-32','rounded-full','mb-3');

            img.src = artist.urlImg;
            img.alt = artist.name;
          
    
            const artistName = document.createElement('span');
            
            artistName.innerText = artist.name;
          
           
    
            artistDiv.appendChild(img);
            artistDiv.appendChild(artistName);
            resultArtist.appendChild(artistDiv);
        });
    
        // Mostra a seção de resultados
        div?.classList.add('hidden');
        resultArtist?.classList.remove('hidden');
    };
    


    return (
        <header className='flex justify-between p-3 items-center'>
            <div>
                <img src={spo} alt="ada"  width={40}/>
            </div>

            <div className='flex items-center font-bold text-[#B3B3B3] tracking-wider '>

                <div className='flex items-center justify-between relative '>
                    <input 
                        onKeyUp={(event) => requestApi((event.target as HTMLInputElement).value)}
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
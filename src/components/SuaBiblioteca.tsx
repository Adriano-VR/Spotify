import React from "react";

const SuaBiblioteca: React.FC = () => {
  return (
    <div  className="bg-[#121212] p-3 rounded-xl text-white flex flex-col h-full text-[14px] ">
      <div className="flex justify-between mx-2 text-[#B3B3B3] font-bold mb-9">
        <h3 className="text-[16px]">Sua Biblioteca</h3>
        <span>+</span>
      </div>

      <div className="flex flex-col gap-8 grow">
        <div className="bg-[#1f1f1f] px-5 py-3 rounded-xl">
          <div className="flex flex-col  gap-2 mb-5">
            <h4 className="font-bold text-[16px] ">
              Crie sua primeira playlist
            </h4>
            <p className="text-sm font-normal">E fácil, vamos te ajudar.</p>
          </div>
          <button className="text-sm bg-white p-2 px-3 rounded-2xl text-black font-bold">
            Criar Playlist
          </button>
        </div>
        <div className="bg-[#1f1f1f] px-5 py-3 rounded-xl">
          <div className="flex flex-col  gap-2 mb-5">
            <h3 className="text-[16px] font-bold">
              Que tal seguir um podcast novo?
            </h3>
            <p className="text-sm">Avisaremos você sobre novos episódios..</p>
          </div>

          <button className="text-sm bg-white p-2 px-3 rounded-2xl text-black font-bold">
            Explore podcasts
          </button>
        </div>
      </div>

      <div className="text-[#B3B3B3] text-[10px] px-5 flex flex-col gap-4 items-start  mb-4 ">
        <ul className="flex gap-4">
          <li>Legal</li>
          <li>Segurança e Centro de privacidade</li>
          <li>Política de privacidade</li>
        </ul>
        <ul className="flex gap-4">
          <li>Cookies</li>
          <li>Sobre anúncios</li>
          <li>Acessibilidade</li>
        </ul>

        <button className="border font-extrabold p-2 rounded-3xl mt-6 text-[14px] ">
          Portugues do Brasil
        </button>
      </div>
    </div>
  );
};

export default SuaBiblioteca;

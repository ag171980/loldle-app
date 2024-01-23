"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./page.css";
import Info from "./components/Info/info";
import Filtered from "./components/Filtered/filtered";
import { LiaLocationArrowSolid } from "react-icons/lia";

const Home: React.FC = () => {
  const [stateLoader, setStateLoader] = useState<boolean>(true);
  const [champInserted, setChampInserted] = useState<Array<ChampDTO>>([]);
  const [champRandom, setChampRandom] = useState<ChampDTO>();
  const [champ, setChamp] = useState<string>("");
  const [listChamps, setListChamps] = useState([]);
  const [champsFiltered, setChampsFiltered] = useState<Array<ChampDTO>>([]);

  const formSearch = useRef<HTMLFormElement>(null);

  const getChamps = async () => {
    const response = await axios.get("");
    console.log(response.data);

    // setListChamps(response.data.data);
  };
  const randomChamp = async () => {
    const champsSize = Object.values(listChamps).length;
    const posRandom = Math.floor(Math.random() * champsSize);
    setChampRandom(Object.values(listChamps)[posRandom]);
  };
  if (listChamps.length === 0) {
    getChamps();
    // setStateLoader(false);
  }
  const filterChamp = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      const filtered = Object.values(listChamps).filter((ch: ChampDTO) =>
        ch.name.toLowerCase().startsWith(e.currentTarget.value.toLowerCase())
      );
      setChampsFiltered(filtered);
    } else {
      setChampsFiltered([]);
    }
  };

  const selectChamp = (champName: string) => {
    let champList = [...champInserted];
    const champInsert = Object.values(listChamps).filter(
      (ch: ChampDTO) => ch.name === champName
    );
    console.log(champInsert[0]);
    champList.push(champInsert[0]);

    let newList = Object.values(listChamps).filter(
      (ch: ChampDTO) => ch.name !== champName
    );

    setChampInserted(champList);
    setListChamps(newList);
    setChampsFiltered([]);
  };
  const searchChamp = (e: React.FormEvent) => {
    e.preventDefault();
    if (champsFiltered.length !== 0) {
      let champList = [...champInserted];

      champList.push(champsFiltered[0]);
      setChampInserted(champList);

      let newList = Object.values(listChamps).filter(
        (ch: ChampDTO) => ch.name !== champsFiltered[0].name
      );
      setListChamps(newList);
      setChampsFiltered([]);
      formSearch?.current?.reset();
    } else {
      console.log("no hay nada");
    }
  };

  useEffect(() => {}, [champ]);
  useEffect(() => {}, [champsFiltered]);
  useEffect(() => {
    randomChamp();
  }, [listChamps]);

  return (
    <main className="index">
      <div className="filtro"></div>
      <div className="container">
        <h1>Bienvenido a Loldle</h1>

        <form ref={formSearch} onSubmit={(e) => searchChamp(e)}>
          <div className="input">
            <input
              type="text"
              onChange={(e) => filterChamp(e)}
              placeholder="Escribe el nombre del campeón"
            />
            <button type="submit">
              <LiaLocationArrowSolid />
            </button>
          </div>
          <Filtered champsFiltered={champsFiltered} selectChamp={selectChamp} />
        </form>
        <div className="probados">
          <div className="header">
            <p>Campeon</p>
            <p>Recurso</p>
          </div>
          <div className="champs-probados">
            {champInserted.map((champ: ChampDTO, pos: number) => (
              <div key={pos} className="champ-probado">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${champ.image.full}`}
                />
                <p>{champ.partype}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Info />
    </main>
  );
};

export default Home;

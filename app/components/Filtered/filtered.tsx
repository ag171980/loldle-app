import "./filtered.css";

interface FilteredDTO {
  champsFiltered: Array<ChampDTO>;
  selectChamp: (champName: string) => void;
}
const Filtered: React.FC<FilteredDTO> = ({ champsFiltered, selectChamp }) => {
  return (
    <div className="filter-champs">
      {champsFiltered.map((champ: ChampDTO, pos: number) => (
        <div
          key={pos}
          onClick={() => selectChamp(champ.name)}
          className="filter-champ"
        >
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${champ.image.full}`}
          />
          <p>{champ.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Filtered;

import { FaInfo } from "react-icons/fa6";
import "./info.css";
import { useState } from "react";

const Info = () => {
  const [stateBtn, setStateBtn] = useState<Boolean>(false);
  const openModal = () => {};
  return (
    <div className="info">
      <FaInfo onClick={() => setStateBtn(!stateBtn)} />
      {stateBtn && <div className="container-info">asdads</div>}
    </div>
  );
};

export default Info;

import Modal from "react-modal";
import axios from "axios";
import { useState, useEffect } from "react";

const Cat = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [facts, setFacts] = useState([]);
  const [num, setNum] = useState(0);

  const fetchFacts = async () => {
    try {
      const res = await axios.get("https://cat-fact.herokuapp.com/facts");

      console.log(res.data);
      setFacts(res.data);
    } catch (error) {
      console.error(error);
      setFacts("Error in the facts");
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          fetchFacts();
          setmodalOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpen={modalOpen} onRequestClose={() => setmodalOpen(false)}>
        <div className="map">
          {""}
          {facts.length > 0 && facts[0].text && (
            <div className="modalFact">
              <p>{facts[num].text}</p>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setmodalOpen(false);
            setNum((prev) => {
              if (prev === 4) {
                return 0;
              } else {
                return prev + 1;
              }
            });
          }}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};
export default Cat;

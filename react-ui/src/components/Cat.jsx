import Modal from "react-modal";
import axios from "axios";
import { useState, useEffect } from "react";

const Cat = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [facts, setFacts] = useState([]);

  const fetchFacts = async () => {
    try {
      const res = await axios.get("https://cat-fact.herokuapp.com/facts");

      console.log(res.data);
      setFacts(res.data);
    } catch (error) {
      console.error(error);
      setFacts("Error in z facts");
    }
  };

  return <div></div>;
};

export default Cat;

import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = (initialState = true) => {
  const [isFlipped, setFlipped] = useState(initialState);
  const flipCard = () => {
    setFlipped((isFacingUp) => !isFacingUp);
  };
  return [isFlipped, flipCard];
};

const useAxios = (url) => {
  const [objs, setObjs] = useState([]);
  const addObj = async (restOfUrl = "") => {
    try {
      const res = await axios.get(`${url}${restOfUrl}`);
      setObjs((objs) => [...objs, { ...res.data, id: uuid() }]);
    } catch (err) {
      throw new Error("Can't fetch data");
    }
  };

  const clearObj = () => setObjs([]);

  return [objs, addObj, clearObj];
};

export { useFlip, useAxios };

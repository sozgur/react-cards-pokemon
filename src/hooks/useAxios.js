import { useState } from "react";
import uuid from "uuid";

const useAxios = (url) => {
  const [objs, setObjs] = useState([]);
  const addObj = () => {
    const getObj = async () => {
      try {
        const res = await axios.get(url);
        setObjs((obj) => [...objs, { ...res.data, id: uuid() }]);
      } catch (err) {
        throw new Error("Can't fetch data");
      }
    };
    getObj();
  };
  return [obj, setObjs];
};

export default useAxios;

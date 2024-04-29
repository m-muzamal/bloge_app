import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get(url);
        setData(res.data);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return data;
};

export default useFetch;

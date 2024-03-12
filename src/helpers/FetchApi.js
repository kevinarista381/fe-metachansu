import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetchApi = (path) => {
  const [currentData, setcurrentData] = useState(null);
  let uri = `${process.env.REACT_APP_BASE_URL}${path}`;

  useEffect(async () => {
    let data = await fetchData();
    setcurrentData(data);
  }, []);

  let fetchData = useCallback(async () => {
    try {
      let result = await axios.get(uri);
      return result.data;
    } catch (error) {
      window.alert(`An error occurred: ${error.message}`);
    }
  });
  return currentData;
};

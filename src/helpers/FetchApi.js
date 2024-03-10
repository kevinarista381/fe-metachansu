import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetchApi = (props) => {
  const [currentData, setcurrentData] = useState(null);
  let { method, path } = props;
  let uri = `${process.env.REACT_APP_BASE_URL}${path}`;

  useEffect(async () => {
    let data = await fetchData();
    setcurrentData(data);
  }, []);

  let fetchData = useCallback(async () => {
    try {
      if (method.toLowerCase() === "get") {
        let result = await axios.get(uri);
        return result.data;
      }
    } catch (error) {
      window.alert(`An error occurred: ${error.message}`);
    }
  });
  return currentData;
};

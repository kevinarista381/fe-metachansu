import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const RequestHandler = async (method, path, data) => {
  let url = `${process.env.REACT_APP_BASE_URL}${path}`;
  let res = await axios({
    method,
    url,
    data,
  });

  return res;
};

import { useState } from "react";
import axios from 'axios';


 const usePlayerCount = (url) => {
  const [storedValue, setStoredValue] = useState('');

  axios.get(`${url}`)
  .then( res => setStoredValue(res.data.length))

    return storedValue;


};


export default usePlayerCount
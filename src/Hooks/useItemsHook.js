import { useEffect, useState } from 'react';

const useItems = (url = 'https://jsonplaceholder.typicode.com/users') => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
    })();
  }, [url]);
  return [items, setItems];
};

export default useItems;

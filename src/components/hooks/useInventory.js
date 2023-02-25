import { useEffect, useState } from 'react';

const useInventory = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const url = 'https://home-reserve-server-side.vercel.app/inventory';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useInventory;

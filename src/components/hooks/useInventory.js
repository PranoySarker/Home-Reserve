import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        const url = 'https://protected-earth-63464.herokuapp.com/inventory';
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories];
}

export default useInventory;
import {useState} from 'react'

export default function useData() {
    const [data, setData] = useState([]);
    const [loader, setloader] = useState(true);

    const fetchData = (url) =>{
        setloader(true)
        fetch(url)
        .then((res) => res.json())
        .then((d) => {
            setData(d); 
            setloader(false)
        })
    }
  return {data, loader, fetchData}
}

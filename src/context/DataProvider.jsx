import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [dataCate, setDataCate ] = useState([]);
    const [feature, setFeature ] = useState([]);
    useEffect( ()=>{
    const getCateData = async () => {
        const response = await fetch("https://cyber-education-server.vercel.app/cate");
        const data = await response.json();
        setDataCate(data);
    }
    getCateData()
  
    },[])
    useEffect( ()=>{
    const getCateData = async () => {
        const response = await fetch("https://cyber-education-server.vercel.app/feature");
        const data = await response.json();
        setFeature(data);
    }
    getCateData()
  
    },[])

    const dataValue = { dataCate , feature }

    return (
        <DataContext.Provider value={dataValue}>
                { children }
        </DataContext.Provider>
    );
};

export default DataProvider;
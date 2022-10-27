import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [dataCate, setDataCate] = useState([]);
	const [feature, setFeature] = useState([]);
	const [hot, setHot] = useState([]);
	const [sortNew, setSortNew] = useState([]);
	const [special, setSpecial] = useState([]);
	const [sortPrice, setSortPrice] = useState([]);
	const [sortPriceDes, setPriceDes] = useState([]);
	const [sortRating, setRating] = useState([]);
	const [sortRatingDes, setRatingDes] = useState([]);


	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/cate"
			);
			const data = await response.json();
			setDataCate(data);
		};
		getCateData();
	}, []);

	useEffect(() => {
		const getFeatureData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/feature"
			);
			const data = await response.json();
			setFeature(data);
		};
		getFeatureData();
	}, []);

	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/hot"
			);
			const data = await response.json();
			setHot(data);
		};
		getCateData();
	}, []);

	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/special"
			);
			const data = await response.json();
			setSpecial(data);
		};
		getCateData();
	}, []);

	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/new"
			);
			const data = await response.json();
			setSortNew(data);
		};
		getCateData();
	}, []);

	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/price"
			);
			const data = await response.json();
			setSortPrice(data);
		};
		getCateData();
	}, []);
    
	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/rating"
			);
			const data = await response.json();
			setRating(data);
		};
		getCateData();
	}, []);
	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/rating/desc"
			);
			const data = await response.json();
			setRatingDes(data);
		};
		getCateData();
	}, []);
	useEffect(() => {
		const getCateData = async () => {
			const response = await fetch(
				"https://cyber-education-server.vercel.app/price/desc"
			);
			const data = await response.json();
			setPriceDes(data);
		};
		getCateData();
	}, []);
	const dataValue = {
		dataCate,
		feature,
		hot,
		special,
		sortNew,
		sortPrice,
		sortPriceDes,
		sortRating,
		sortRatingDes,
	};

	return (
		<DataContext.Provider value={dataValue}>
            {children}
        </DataContext.Provider>
	);
};

export default DataProvider;

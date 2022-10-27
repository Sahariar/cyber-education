import React, { useContext } from "react";
import CategoryList from "../CategoryList/CategoryList";
import { BiCategory, BiTime } from "react-icons/bi";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";
import { BsCurrencyDollar,BsSortNumericUpAlt ,BsSortNumericDown } from "react-icons/bs";
import { MdFeaturedPlayList } from "react-icons/md";
import { GiBurningRoundShot ,GiNewspaper, GiHistogram } from "react-icons/gi";



const Sidebar = () => {
	const { dataCate } = useContext(DataContext);

	const navigate = useNavigate();
	const handleCateNavigation = () => {
		navigate(`/curriculum`);
	};
	const handleFeatureNav = () => {
		navigate(`/feature`);
	};
	const handleHotNav = () => {
		navigate(`/hot`);
	};
	const handleSpacialNav = () => {
		navigate(`/spacial`);
	};
	const handleNewNav = () => {
		navigate(`/newcurriculum`);
	};
	const handlePriceNav = () => {
		navigate(`/price`);
	};
	const handlePriceDesNav = () => {
		navigate(`/pricedes`);
	};
	const handleRattingNav = () => {
		navigate(`/ratting`);
	};
	const handleRattingDesNav = () => {
		navigate(`/rattingdes`);
	};
	const pathUrl = window.location.pathname;
	return (
		<div className="card md:w-8/12 w-11/12 lg:w-full bg-base-100 shadow-xl mx-auto">
			<div className="card-body">
				<div className="category-area">
					<h2 className="card-title ">
						<BiCategory /> Category:
					</h2>
					{dataCate.map((cate) => (
						<CategoryList key={cate.id} category={cate}></CategoryList>
					))}
					<div
						className={
							pathUrl === `/curriculum`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleCateNavigation();
						}}
					>
						<div className="price flex text-xl text- justify-start items-center font-bold  ">
							<p className="flex gap-2 items-center">
								<span className="">
									<BsFillArrowRightSquareFill />
								</span>{" "}
								<span>All Category</span>
							</p>
						</div>
					</div>
				</div>
				<div className="sort-area my-10">
					<h2 className="card-title ">
						<GrSort /> Status:
					</h2>
					<div
						className={
							pathUrl === `/feature`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleFeatureNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<MdFeaturedPlayList /> <span className="mx-2">Featured</span>
						</div>
					</div>
					<div
						className={
							pathUrl === `/spacial`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleSpacialNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<GiHistogram /> <span className="mx-2">Spacial</span>
						</div>
					</div>
					<div
						className={
							pathUrl === `/hot`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleHotNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<GiBurningRoundShot /> <span className="mx-2">Hot</span>
						</div>
					</div>
					<div
						className={
							pathUrl === `/newcurriculum`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleNewNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<GiNewspaper /> <span className="mx-2">New</span>
						</div>
					</div>
				</div>
				<div className="sort-area my-5">
					<h2 className="card-title ">
						<GrSort /> Sort By: Price
					</h2>
					<div className="">
          <div
						className={
							pathUrl === `/price`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handlePriceNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<BsSortNumericDown /> <span className="mx-2">Ascending</span>
						</div>
					</div>
          <div
						className={
							pathUrl === `/pricedes`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handlePriceDesNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<BsSortNumericUpAlt /> <span className="mx-2">Descending</span>
						</div>
					</div>
					</div>
				</div>
				<div className="sort-area my-5">
					<h2 className="card-title ">
						<GrSort /> Sort By: Ratting
					</h2>
					<div className="">
          <div
						className={
							pathUrl === `/ratting`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleRattingNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<BsSortNumericDown /> <span className="mx-2">Ascending</span>
						</div>
					</div>
          <div
						className={
							pathUrl === `/rattingdes`
								? "card-actions justify-between py-2 cursor-pointer px-5 bg-primary rounded-lg"
								: "card-actions justify-between py-2 cursor-pointer px-5"
						}
						onClick={() => {
							handleRattingDesNav();
						}}
					>
						<div className="price flex text-lg text- justify-start items-center font-bold">
							<BsSortNumericUpAlt /> <span className="mx-2">Descending</span>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

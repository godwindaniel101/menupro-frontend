import { useEffect, useState } from "react";
import { RiMenuFill, RiSearchLine, RiArrowLeftLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../app-navigation/routes";
import useGlobalStates from "../store/useGlobalStates";
import Sidebar from "./Sidebar";
import useMenu from "../store/useMenu";

type HeaderProps = {
	subCategories?: string[];
};

const Header = ({ subCategories }: HeaderProps) => {
	const {
		activeSubCategory,
		setActiveCategory,
		openSearchBar,
		setOpenSearchBar,
		searchQuery,
		setSearchQuery,
	} = useGlobalStates((state) => state);
	const { menu_details } = useMenu((state) => state);
	const { pathname } = useLocation();
	const isHomePage = pathname === ROUTES.home && true;
	const navigate = useNavigate();
	const [openSidebar, setOpenSidebar] = useState(false);

	const handleBackToHome = () => {
		setSearchQuery("");
		setOpenSearchBar(false);
		navigate(ROUTES.home);
	};

	useEffect(() => {
		if (subCategories?.length) {
			setActiveCategory(subCategories[0]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const autoScroll = () => {
		setTimeout(() => {
			const activeLink = document.getElementById(`${activeSubCategory}-link`);
			if (activeLink) {
				activeLink.scrollIntoView({ behavior: "smooth", inline: "center" });
			}
		}, 1000);
	};

	const toggleSearch = () => {
		setSearchQuery("");
		setOpenSearchBar(!openSearchBar);
	};

	useEffect(() => {
		autoScroll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeSubCategory]);

	return (
		<>
			<header className="w-full">
				<nav className="h-[100px] bg-dark-teal flex items-center justify-between relative text-light-teal px-4">
					{isHomePage ? (
						<button
							className="text-[25px] p-2 rounded-full hover:bg-very-dark-teal transition"
							onClick={() => setOpenSidebar(true)}>
							<RiMenuFill />
						</button>
					) : (
						<button
							className="text-[25px] p-2 rounded-full hover:bg-very-dark-teal transition"
							onClick={handleBackToHome}>
							<RiArrowLeftLine />
						</button>
					)}
					<div className="absolute left-[50%] translate-x-[-50%] leading-[1] text-[22px] xs:text-[30px] font-black text-center">
						<h1 className="logo_text">{menu_details?.menu_name}</h1>
					</div>
					{!isHomePage && (
						<button
							className="text-[25px] p-2 rounded-full hover:bg-very-dark-teal transition"
							onClick={toggleSearch}>
							<RiSearchLine />
						</button>
					)}
				</nav>

				{openSearchBar && (
					<div className="py-4 px-6 bg-dark-teal">
						<input
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full border border-medium-teal rounded-lg outline-none h-[44px] pl-4 text-[15px] text-neutral-200 bg-very-dark-teal placeholder:text-neutral-600"
						/>
					</div>
				)}

				{subCategories && (
					<div className="px-6 py-4 bg-dark-teal flex items-center gap-3 border-b-[5px] overflow-x-auto hide-scroll border-t-2 border-very-dark-teal">
						{subCategories.map((subCategory, index) => (
							<a
								key={index}
								id={`${subCategory}-link`}
								href={`#${subCategory}`}
								className={`cat-link min-w-fit py-1 px-4 rounded-lg font-semibold border border-light-teal ${
									activeSubCategory === subCategory
										? " bg-light-teal text-very-dark-teal"
										: "bg-none text-light-teal"
								}`}
								onClick={() => setActiveCategory(subCategory)}>
								{subCategory.toUpperCase()}
							</a>
						))}
					</div>
				)}
			</header>

			<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
		</>
	);
};

export default Header;

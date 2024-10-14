import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Casual.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CasualListContainer from "./ItemsCasual/CasualListContainer";

export default function Casual() {

    const activeColor = "#000000";
    const inactiveColor = "#f0f0f0";

    let [valuePrice, setValuePrice] = useState(40); // Initial value for range
    let [ratios, setRatios] = useState(0); // Initial ratio value
    let [handleApply, setHandleApply] = useState(40)

    useEffect(() => {
        function calculateRatio(value) {
            const ratioValue = ((value - 40) / (400 - 40)) * 100;
            setRatios(ratioValue);
        }
        calculateRatio(valuePrice);
    }, [valuePrice]);
    

    

    return (
        <>
            <Header />
            <div className="casual-container">
                <div className="left-casual">
                    <div className="current-page">
                        Home <MdKeyboardArrowRight /> Shop <MdKeyboardArrowRight /> <span>Casual</span>
                    </div>
                    <div className="filter">
                        <div className="filter-wrapper">
                            <div className="filter-row filter-top">
                                <div className="filter-top-title">
                                    Filters
                                </div>
                                <GiSettingsKnobs />
                            </div>

                            <div className="gor-line"></div>

                            <div className="filter-row types">
                                <Link className='type' to=''>T-shirts <MdKeyboardArrowRight /></Link>
                                <Link className='type' to=''>Shorts <MdKeyboardArrowRight /></Link>
                                <Link className='type' to=''>Shirts <MdKeyboardArrowRight /></Link>
                                <Link className='type' to=''>Hoodie <MdKeyboardArrowRight /></Link>
                                <Link className='type' to=''>Jeans <MdKeyboardArrowRight /></Link>
                            </div>

                            <div className="gor-line"></div>

                            <div className="filter-row price">
                                <div className="price-title">Price</div>
                                <input
                                    value={valuePrice}
                                    onChange={(e) => setValuePrice(e.target.value)}
                                    style={{
                                        backgroundImage: `linear-gradient(90deg, ${activeColor} ${ratios}%, ${inactiveColor} ${ratios}%)`
                                    }}
                                    type="range"
                                    min="40"
                                    max="400"
                                    id="inputRange"
                                    className="inputRange"
                                />
                                <div className="value-input">from {valuePrice}$</div>
                            </div>

                            <div className="gor-line"></div>

                            <div className="filter-row button">
                            <button className="Apply" onClick={() => setHandleApply(valuePrice)}>Apply filter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-casual">
                    <CasualListContainer price={handleApply}/>
                </div>

            </div>
            <Footer />
        </>
    );
}

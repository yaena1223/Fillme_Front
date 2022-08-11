import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')


const Modal_style = {
	overlay: {
		position: "absolute",
		top: "9%",
		left: "64.5%",
		right: "10%",
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0)",
		zIndex: 10,
	},
	content: {
		display: "flex",
		background: "#ffffff",
		overflow: "auto",
		top: "9vh",
		left: "60vw",
		right: "100vw",
		bottom: "42vh",
		WebkitOverflowScrolling: "touch",
		outline: "none",
	},
};

function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="header" style={{position: "relative"}}>
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>

                <div className="modal">
                    <button type="button" onClick={() => setModalOpen(!modalOpen)}>
                        <img 
                        className={styles.icon} 
                        id="bell" src="images/bell.png" 
                        alt="New"/>
                    </button>
                    <div>
                        <Modal isOpen={modalOpen}
                            className="customModal"
                            style={Modal_style}>
                            <div className="News">
                                <p id="Today">오늘</p>
                                <p id="ThisWeek">이번 주</p>
                                <p id="ThisMonth">이번 달</p>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
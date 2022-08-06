import "../static/css/Footer.css";
function Footer() {
    return (
        <div className="Footer" style={footer_style}>
            <div id="footer_left" style={{ width: `33%` }}>
                <p id="footer_logo">Fill Me</p>
                <p id="footer_detail">What is your Multi-Persona</p>
            </div>
            <div id="copyright" style={{ width: `33%` }}>
                ⓒ 2022 WHO YOU All Rights Reserved
            </div>
            <div id="created" style={{ width: `33%`, display: `flex` }}>
                <div id="role" style={{ width: `50%`, textAlign: `right` }}>
                    <p>Planner & Designer </p>
                    <p>Frontend Developer</p>
                    <p>Backend Developer</p>
                </div>
                <div id="contribute">
                    <p>이영서</p>
                    <p>김윤성 오준서 이예나</p>
                    <p>박영신 정준홍</p>
                </div>
            </div>
        </div>
    );
}

function Footer2() {
    return (
        <div className="Footer2" style={footer_style2}>
            <div id="footer_left" style={{ width: `33%` }}>
                <p id="footer_logo">Fill Me</p>
                <p id="footer_detail">What is your Multi-Persona</p>
            </div>
            <div id="copyright" style={{ width: `33%` }}>
                ⓒ 2022 WHO YOU All Rights Reserved
            </div>
            <div id="created" style={{ width: `33%`, display: `flex` }}>
                <div id="role" style={{ width: `50%`, textAlign: `right` }}>
                    <p>Planner & Designer </p>
                    <p>Frontend Developer</p>
                    <p>Backend Developer</p>
                </div>
                <div id="contribute">
                    <p>이영서</p>
                    <p>김윤성 오준서 이예나</p>
                    <p>박영신 정준홍</p>
                </div>
            </div>
        </div>
    );
}
export { Footer, Footer2 };

const footer_style = {
    bottom: 0,
    left: 0,
    display: `flex`,
    width: `100%`,
    background: `#3CDA9F`,
    height: `150px`,
};

const footer_style2 = {
    position: `absolute`,
    bottom: 0,
    left: 0,
    width: `100%`,
    display: `flex`,
    background: `#3CDA9F`,
    height: `150px`,
};
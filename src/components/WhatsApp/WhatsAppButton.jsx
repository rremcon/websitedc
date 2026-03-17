import React from "react";
import './WhatsAppButton.css';


const WhatsAppButton = () => {
    const phoneNumber = "31622161161"; // zonder +
    const message = encodeURIComponent(
        ""
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
        >
            💬
            Online
        </a>
    );
};

const styles = {
    button: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        textDecoration: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
    },
};

export default WhatsAppButton;
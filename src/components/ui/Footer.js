import React from "react";
import Filter from "./Filter";
import ButtonWrapper from "./ButtonWrapper";

const Footer = (props) => {
    const { count, filter, changeFilter } = props;

    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ButtonWrapper {...props} />
            </div>
            <div className="pull-left">{`مورد باقی مانده ${count}`}</div>
            <div className="pull-right">
                <Filter {...{ filter, changeFilter }} />
            </div>
        </footer>
    );
};

export default Footer;

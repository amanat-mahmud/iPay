import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <div className="m-10">
      <h1 className="text-5xl font-bold mb-10">Our Service</h1>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Link to="/addmoney">
            <FaArchive size={"80px"} />
            <p>Add money</p>
          </Link>
        </div>
        <div>
          <Link to="/sendmoney">
            <FaMoneyBillAlt size={"80px"} />
            <p>Send money</p>
          </Link>
        </div>
        <div>
          <Link to="/payment">
            <FaHandHoldingUsd size={"80px"} />
            <p>Payment</p>
          </Link>
        </div>
        <div>
          <Link to='paybill'>
            <FaLightbulb size={"80px"} />
            <p className="ml-4">Pay bill</p>
          </Link>
        </div>
        <div>
          <Link to='recharge'>
            <FaMobileAlt size={"80px"} />
            <p className="ml-2">Recharge</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurService;

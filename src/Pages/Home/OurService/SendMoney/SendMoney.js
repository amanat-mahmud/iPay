import React from 'react';

const SendMoney = () => {
    return (
        <div className="grid grid-cols-3 gap-36 mb-10">
        <div></div>
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Receiver name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Receiver user name"
          className="input input-bordered w-full max-w-xs mt-4"
        />
        <input
          type="number"
          placeholder="Amount"
          className="input input-bordered w-full max-w-xs mt-4"
        />
        <button className="btn btn-primary p-3 mt-3" type="submit">Send money</button>
      </div>
      <div></div>
    </div>
    );
};

export default SendMoney;
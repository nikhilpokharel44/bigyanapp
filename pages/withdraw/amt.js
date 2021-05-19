/** @format */

import React from "react";
import { FaFilter as Filter } from "react-icons/fa";

export default function Amt() {
  return (
    <div className='_withdraw'>
      <div className='_page_header'>
        <h4>Withdraw Amount</h4>
      </div>
      <div className='_amount_history my-2'>
        <div className='_allowed_details'>
          <div className='row'>
            <div className='col-lg-6 _user_desc'>
              <p>Amount Earned</p>
              <div>Nrs 1000</div>
            </div>
            <div className='col-lg-6 _user_desc'>
              <p>Amount Withdrawn</p>
              <div>Nrs 20</div>
            </div>
          </div>
        </div>
      </div>

      <div className='_checkout'>
        <h4 className='_review_head'> Enter amount you want to withdraw</h4>
        <form className='_checkout_form'>
          <div className='form-group'>
            <input
              type='number'
              id='amtToBeWithdrawn'
              className='form-control rounded-0'
              placeholder='Amount must be atleast NRS-100'
            />
            <button type='submit' className='btn btn-submit rounded-0'>
              Withdraw
            </button>
          </div>
        </form>
      </div>

      <div className='_withdrawl_history my-4'>
        <div className='_filter_history'>
          <h4 className='_review_head'>Withdraw History</h4>
          <button className='btn btn-filter'>
            <Filter />
          </button>
        </div>
        <ul className='list-group _list'>
          <li className='list-group-item rounded-0 d-flex justify-content-between _list_item'>
            <span className='_date'>Monday, 2015/10/12</span>
            <span className='_amt'>NRs-20</span>
          </li>
          <li className='list-group-item rounded-0 d-flex justify-content-between _list_item'>
            <span className='_date'>Monday, 2015/10/12</span>
            <span className='_amt'>NRs-20</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

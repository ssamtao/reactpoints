import React from 'react';
import { data } from "../codepoints";
import PointBonusList from "./PointBonusList";
import "../style.css";

function calculatePoints(price) {
      let totpoints=0;
      let truncPrice = Math.trunc(price)
      if(truncPrice < 100 && truncPrice > 50) {
        totpoints =totpoints + (truncPrice - 50)
      } else if (truncPrice === 100) {
        totpoints=totpoints + 50
      } else if (truncPrice > 100) {
        totpoints=totpoints + 50 + ((truncPrice - 100)* 2)
      }
   return totpoints;
}

function PointBonus() {

  return (
    <div className="container-fluid">
      <table class="scroll">
        <thead>
            <tr>
                <th>Id Transaction</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
        <PointBonusList data={data} />
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Amount : {data.reduce((amount,pointbonus) =>  amount = amount + pointbonus.amount , 0 )}</td>
            <td>Total Points : {data.reduce((points,bonus) =>  points = points + calculatePoints(bonus.amount) , 0 )}</td>
          </tr>
        </tfoot>
       </table>
    </div>
  );
}

export default PointBonus;
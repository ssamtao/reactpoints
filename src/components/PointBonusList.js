function PointBonusList({ data }) {
    return (
        <tr>
          {data.map(function (bonuspoint) {
            let totpoints=0;
            let truncPrice = Math.trunc(bonuspoint.amount)
            if(truncPrice < 100 && truncPrice > 50) {
              bonuspoint.totpoints=bonuspoint.totpoints + (truncPrice - 50)
            } else if (truncPrice === 100) {
              bonuspoint.totpoints=bonuspoint.totpoints + 50
            } else if (truncPrice > 100) {
              bonuspoint.totpoints=totpoints + 50 + ((truncPrice - 100)* 2)
            }
            return <div><td>{bonuspoint.id}</td>
            <td>{bonuspoint.customer}</td> 
            <td>{bonuspoint.date}</td>
            <td>{bonuspoint.amount}</td>
            <td>{bonuspoint.totpoints}</td></div>;
          })}
        </tr>
    );
  }
  
  export default PointBonusList;
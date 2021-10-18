import React from "react";

function ListName({ data }) {
    if (!data) {
      return (
          <p>Tidak Ada Data</p>
      )
    }else if(data.length <= 1){
        return(
            <p>
                Ada Satu Ada
            </p>
        )
    }
    else{
      return (
          <p>Ada Data Lebih Dari satu</p>
        );
    }

//   return !data ? (<p>Tidak Ada Data</p>) : (<ul>{data.map((item) => (<li>{item.firstname}</li>))}</ul>)
}

export default ListName;

import {useState, useEffect} from "react";
import {BallTriangle} from "react-loader-spinner";
import {customerData} from "../../types/types";

function List() {
  const [json, setJson] = useState<{data: [customerData]}>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!json) {
      fetch("http://localhost:8055/items/customers")
        .then(response => {
          return response.json();
        })
        .then(data => {
          setJson(data);
        })
        .catch((e: Error) => {
          setError(e.message);
          console.log(e.message);
        });
    }
  }, [json]);

  return (
    <div>
      <div style={{margin: "2rem"}}>LIST</div>
      {json && !error ? (
        json?.data?.map((el: customerData, i: number) => {
          return (
            <div key={i} style={{margin: "2rem"}}>
              <p>{el.firstname}</p>
              <p>{el.lastname}</p>
              <p>{el.city}</p>
            </div>
          );
        })
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      )}
    </div>
  );
}

export default List;

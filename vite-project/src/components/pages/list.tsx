import {BallTriangle} from "react-loader-spinner";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {customerData} from "../../types/types";
import Card from "../basics/Card/Card";
import Button from "../basics/Button/Button";

function List() {
  const getJson = async () => {
    const json = await fetch("http://localhost:8055/items/customers")
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      });

    return json.data;
  };
  const {data, error, isLoading} = useQuery("customer", getJson);

  if (error) return <div style={{color: "red"}}>Request failed</div>;
  if (isLoading)
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    );

  return (
    <div>
      <div style={{margin: "2rem"}}>LIST</div>
      <Link to="/create">
        <Button label="+ Create" />
      </Link>
      {data?.map((el: customerData, i: number) => {
        return (
          <Card
            key={i}
            title={`${el.firstname} ${el.lastname}`}
            content={`${el.street} ${el.house_number}, ${el.zip_code}`}
          />
        );
      })}
    </div>
  );
}

export default List;

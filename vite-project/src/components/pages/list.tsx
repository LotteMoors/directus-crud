import {BallTriangle} from "react-loader-spinner";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {customerData} from "../../types/types";
import Card from "../basics/Card/Card";
import Button from "../basics/Button/Button";
import {api} from "../../utils/funcs/api";

function List() {
  // const params = useParams()
  const getCustomers = async () => {
    const json = await api("http://localhost:8055/items/customers", "GET", undefined);
    return json.data;
  };
  const getCountries = async () => {
    const json = await api("http://localhost:8055/items/countries", "GET", undefined);
    return json.data;
  };

  const {data, error, isLoading, isFetching} = useQuery("customer", getCustomers);
  const {data: countries} = useQuery("countries", getCountries);

  if (error) return <div style={{color: "red"}}>Request failed</div>;
  if (isLoading || isFetching)
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
      <Link to="/create">
        <Button label="+ Create" />
      </Link>
      {data?.map((el: customerData, i: number) => {
        const country = countries.find((country: {id: number; name: string}) => country.id === el.country);
        return (
          <Card
            key={i}
            title={`${el.firstname} ${el.lastname}`}
            content={`${el.street} ${el.house_number} - ${el.zip_code}, ${country.name}`}
          />
        );
      })}
    </div>
  );
}

export default List;

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
    return json.data || json;
  };
  const getCountries = async () => {
    const json = await api("http://localhost:8055/items/countries", "GET", undefined);
    return json.data || json;
  };

  const {data: customers, error, isLoading, isFetching, refetch} = useQuery("customers", getCustomers);
  const {data: countries} = useQuery("countries", getCountries);

  const handleDelete = async (id: string) => {
    await api(`http://localhost:8055/items/customers/${id}`, "DELETE", undefined);
    refetch()
  };

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
      {customers?.map((el: customerData, i: number) => {
        const country = countries?.find((country: {id: number; name: string}) => country.id === el.country);
        return (
          <Card
            key={i}
            id={el.id}
            title={`${el.firstname} ${el.lastname}`}
            content={`${el.street} ${el.house_number} - ${el.zip_code}, ${country?.name}`}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default List;

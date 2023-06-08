import {useState} from "react";
import {object, string, number} from "yup";
import {customerData} from "../../types/types";
import {api} from "../../utils/funcs/api";
import {useNavigate} from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  street: "",
  house_number: "",
  zip_code: 0,
  city: "",
  country: 0,
  telephone: "1234",
};

function Create() {
  const [data, setData] = useState<customerData>(initialValues);
  const [error, setError] = useState<[]>([]);
  const consumerSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    house_number: string().required(),
    zip_code: number().min(1000).max(9999),
    city: string().required(),
    country: number().required().positive().integer(),
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError([]);
    consumerSchema.validate(data, {abortEarly: false}).catch(function (err) {
      setError(err.errors);
    });
    setTimeout(async () => {
      if (!error.length && data) {
        await api("http://localhost:8055/items/customers", "POST", data).then(data => data && navigate("/list"));
      }
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type} = e.target;
    setData({
      ...data,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const hasError = (name: string) => {
    if (error.length) {
      const err = error.find((err: string) => {
        return err.includes(name);
      });
      return <p style={{color: "red"}}> {err} </p>;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "20rem"}}>
      <label htmlFor="firstname">First name:</label>
      <input type="text" id="firstname" name="firstname" onChange={handleInputChange} />
      {hasError("firstname")}
      <label htmlFor="lastname">Last name:</label>
      <input type="text" id="lastname" name="lastname" onChange={handleInputChange} />
      {hasError("lastname")}
      <label htmlFor="street">Street:</label>
      <input type="text" id="street" name="street" onChange={handleInputChange} />
      {hasError("street")}
      <label htmlFor="house_number">House number:</label>
      <input type="text" id="house_number" name="house_number" onChange={handleInputChange} />
      {hasError("house_number")}
      <label htmlFor="zip_code">Zip code:</label>
      <input type="number" id="zip_code" name="zip_code" onChange={handleInputChange} />
      {hasError("zip_code")}
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" onChange={handleInputChange} />
      {hasError("city")}
      <label htmlFor="country">Country:</label>
      <input type="number" id="country" name="country" onChange={handleInputChange} />
      {hasError("country")}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Create;

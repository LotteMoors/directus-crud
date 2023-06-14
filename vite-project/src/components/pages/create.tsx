import {useState} from "react";
import {object, string, number} from "yup";
import {customerData} from "../../types/types";
import {api} from "../../utils/funcs/api";
import {useNavigate} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "../basics/Input/Input";

const initialValues = {
  firstname: "",
  lastname: "",
  street: "",
  house_number: "",
  zip_code: 0,
  city: "",
  country: 0,
  telephone: "",
  id: "",
};

const consumerSchema = object({
  firstname: string().required(),
  lastname: string().required(),
  house_number: string().required(),
  zip_code: number().min(1000).max(9999),
  city: string().required(),
  country: number().required().positive().integer(),
  street: string().required(),
});

function Create() {
  const {
    handleSubmit,
    getValues,
    formState: {errors},
    reset,
  } = useForm<customerData>({
    resolver: yupResolver(consumerSchema),
    defaultValues: initialValues,
  });
  const methods = useForm();

  const [data, setData] = useState<customerData>(initialValues);
  const navigate = useNavigate();
  let value: "city" | "country" | "firstname" | "house_number" | "lastname" | "street" | "zip_code" | "telephone";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type} = e.target;
    setData({
      ...data,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const onSubmit = async (data: customerData) => {
    if (Object.keys(errors).length === 0 && data) {
      await api("http://localhost:8055/items/customers", "POST", data).then(
        data => data && (navigate("/list"), reset())
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} style={{display: "grid", gridTemplateColumns: "50% 50%", width: "100%"}}>
        {Object.keys(getValues()).map((el, i) => {
          if (el === 'id') return
          return (
            <Input
              key={i}
              label={el}
              name={el as typeof value}
              error={errors[el as typeof value]}
              handleInputChange={handleInputChange}
            />
          );
        })}
        <input
          style={{width: "40%", height: "80%"}}
          type="submit"
          value="Submit"
        />
      </form>
    </FormProvider>
  );
}

export default Create;

import {yupResolver} from "@hookform/resolvers/yup";
import Input from "../../components/basics/Input/Input";
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {object, string} from "yup";
import {api} from "../../utils/funcs/api";
import {useLoginStore} from "../../state/stores/useLoginStore";

type Login = {
  email: string;
  password: string;
};

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = object({
  email: string().required(),
  password: string().required(),
});

function Login() {
  const {
    handleSubmit,
    getValues,
    formState: {errors},
    reset,
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
    defaultValues: initialValues,
  });
  const methods = useForm();
  const [data, setData] = useState<Login>(initialValues);

  const getAccessToken = async () => {
    const json = await api("http://localhost:8055/auth/login", "POST", {
      email: data.email,
      password: data.password,
      mode: "json",
      otp: "string",
    });
    return json.data || json;
  };

  const store = useLoginStore(state => console.info(state));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type} = e.target;
    setData({
      ...data,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const onSubmit = async (data: Login) => {
    const token = getAccessToken();
    console.info(token);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{display: "grid", gridTemplateColumns: "50% 50%", width: "100%"}}>
        <div>
          <Input label="email" name="email" handleInputChange={handleInputChange} />
          <Input type="password" label="password" name="password" handleInputChange={handleInputChange} />
          <input style={{width: "50%", height: "50%"}} type="submit" value="Submit" />
        </div>
      </form>
    </FormProvider>
  );
}

export default Login;

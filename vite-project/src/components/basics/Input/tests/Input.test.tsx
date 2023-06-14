import {render} from "@testing-library/react";
import Input from "../Input";
import {customerData} from "types/types";
import {useForm} from "react-hook-form";

const InputWithForm = () => {
  const {
    register,
    formState: {errors},
  } = useForm<customerData>();
  return (
    <Input
      title="test"
      name="firstname"
      error={errors["firstname"]}
      register={register}
      handleInputChange={() => {
        console.log("test");
      }}
    />
  );
};

test("Render Input", () => {
  render(<InputWithForm />);
});

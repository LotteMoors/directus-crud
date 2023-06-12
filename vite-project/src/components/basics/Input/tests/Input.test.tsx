import {render} from "@testing-library/react";
import Input from "../Input";
import {useForm} from "react-hook-form";
import {customerData} from "types/types";

test("Render Input", () => {
  const {
    register,
    formState: {errors},
  } = useForm<customerData>({
    defaultValues: {},
  });

  render(
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
});

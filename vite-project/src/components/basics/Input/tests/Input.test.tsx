import {render} from "@testing-library/react";
import Input from "../Input";
import {customerData} from "types/types";
import {FormProvider, useForm} from "react-hook-form";

const InputWithForm = () => {
  const {
    formState: {errors},
  } = useForm<customerData>();
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Input
        label="test"
        name="firstname"
        error={errors["firstname"]}
        handleInputChange={() => {
          console.log("test");
        }}
      />
    </FormProvider>
  );
};

test("Render Input", () => {
  render(<InputWithForm />);
});

import { VFC } from "react";
import { SSelect } from "../../../styled/styled";

export const Select: VFC<{ name: string, value: string[]; title: string[] }> = (props) => {
  const {name, value, title} = props;
  return (
    <>
      <SSelect name={name} className="form-select" aria-label="Default select example">
        {/* <option value="" selected>未選択</option> */}
        {value.map((value, number) => (
          <option key={number} value={value}>{title[number]}</option>
        ))}
      </SSelect>
    </>
  );
};


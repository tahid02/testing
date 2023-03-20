import { Select } from "@mantine/core";
import { useEffect, useState } from "react";
const DeletePreset = () => {
  const [vall, setValue] = useState<string | null>(null);
  let data = [];
  // const handleDelete = () => {
  //   //@ts-ignore
  //   let deleted = JSON.parse(localStorage.getItem("promptPreset")).filter(
  //     ({ value, label }) => value !== vall
  //   );
  //   console.log(deleted);
  // localStorage.setItem("promptPreset", JSON.stringify(deleted));
  // };
  useEffect(() => {
    //@ts-ignore
    data = JSON.parse(localStorage.getItem("promptPreset"));
  }, [vall]);
  return (
    <div style={{ marginBottom: "1rem" }} id="deleteDropdown">
      <label
        className="mantine-InputWrapper-label mantine-Select-label mantine-1hwfu2"
        htmlFor="mantine-r1b"
        id="mantine-r1b-label"
        style={{ color: "red" }}
      >
        Delete Prompt
      </label>
      <Select
        placeholder="Pick one to delete"
        // onChange={(val) => {
        //   console.log(val);
        //   setValue(val);
        //   handleDelete();
        // }}
        onChange={(val) => {
          setValue(val);
          //@ts-ignore
          let label = data.filter(({ value, label }) => value !== val);
          console.log(label);
          localStorage.setItem("promptPreset", JSON.stringify(label));
        }}
        //@ts-ignore
        data={JSON.parse(localStorage.getItem("promptPreset"))}
        styles={(theme) => ({
          item: {
            "&[data-hovered]": { backgroundColor: "red" },
          },
        })}
      />
    </div>
  );
};

export default DeletePreset;

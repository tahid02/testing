import { Button, Flex, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";

const AddPreset = () => {
  const [areaValue, setAreaValue] = useState("");
  const [labelValue, setLabelValue] = useState("");

  const handleAddPrompt = () => {
    console.log(areaValue, labelValue);
    let data = JSON.parse(localStorage.getItem("promptPreset"));
    console.log(data);
    let addedD = [...data, { label: labelValue, value: areaValue }];
    console.log(addedD);
    localStorage.setItem("promptPreset", JSON.stringify(addedD));
  };
  return (
    <div>
      <TextInput
        label="prompt name"
        value={labelValue}
        placeholder="Doctor"
        onChange={(event) => setLabelValue(event.currentTarget.value)}
      />
      <Textarea
        label="prompt description"
        style={{ margin: " 1rem 0" }}
        value={areaValue}
        onChange={(event) => setAreaValue(event.currentTarget.value)}
        placeholder="You are an expert Doctor."
        autosize
        minRows={4}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Button
          variant="light"
          onClick={handleAddPrompt}
          style={{ fontSize: ".9rem" }}
        >
          Add Prompt
        </Button>
      </div>
    </div>
  );
};

export default AddPreset;

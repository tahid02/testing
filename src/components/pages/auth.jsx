import { PasswordInput, Text, Group } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (message === "timm") {
        sessionStorage.setItem("admin", "true");
        navigate("/");
      }
      // 👇 Get input value
    }

    console.log(message);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: "20%" }}>
          <Group position="apart" mb={5}>
            <Text
              component="label"
              htmlFor="your-password"
              size="sm"
              weight={500}
              color="white"
            >
              Your password
            </Text>
          </Group>
          <PasswordInput
            placeholder="Your password"
            id="your-password"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}

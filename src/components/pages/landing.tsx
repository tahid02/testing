import styled from "@emotion/styled";
import { Button } from "@mantine/core";
import { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectOpenAIApiKey } from "../../store/api-keys";
import { openOpenAIApiKeyPanel } from "../../store/settings-ui";
import { Page } from "../page";

const Container = styled.div`
  flex-grow: 1;
  padding-bottom: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  line-height: 1.7;
  gap: 1rem;
`;

export default function LandingPage(props: any) {
  //   const persistedState = JSON.parse(localStorage.getItem("persist:root") || "");
  //   console.log(persistedState);
  //   //   ChatGPT4: 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

  //   // Eleven Labs Text to speech: 1e3efdd1a28a7c432950771cda75056d
  //   // Update the openAIApiKey property
  //   persistedState.openAIApiKey =
  //     "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";

  //   // Save the updated state back to localStorage
  //   localStorage.setItem("persist:root", JSON.stringify(persistedState));
  localStorage.setItem(
    "openai-api-key",
    "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"
  );
  localStorage.setItem(
    "elevenlabs-api-key",
    "1e3efdd1a28a7c432950771cda75056d"
  );

  const openAIApiKey = useAppSelector(selectOpenAIApiKey);
  const dispatch = useAppDispatch();
  const onConnectButtonClick = useCallback(
    () => dispatch(openOpenAIApiKeyPanel()),
    [dispatch]
  );

  return (
    <Page id={"landing"} showSubHeader={true}>
      <Container>
        <p>
          <FormattedMessage
            defaultMessage={"Hello, how can I help you today?"}
            description="A friendly message that appears at the start of new chat sessions"
          />
        </p>
        {!openAIApiKey && (
          <Button
            size="xs"
            variant="light"
            compact
            onClick={onConnectButtonClick}
          >
            <FormattedMessage
              defaultMessage={"Connect your OpenAI account to get started"}
            />
          </Button>
        )}
      </Container>
    </Page>
  );
}

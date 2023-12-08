import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import useScheme from "src/hooks/useScheme"

// ... (이전 코드)

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme();

  const handleToggle = (selectedScheme: any) => {
    setScheme(selectedScheme);
  };

  return (
      <>
        <StyledWrapper onClick={() => handleToggle('dark')}>
          <Emoji>{getEmojiByScheme('dark')}</Emoji>
        </StyledWrapper>
        <StyledWrapper onClick={() => handleToggle('light')}>
          <Emoji>{getEmojiByScheme('light')}</Emoji>
        </StyledWrapper>
        <StyledWrapper onClick={() => handleToggle('gangwon')}>
          <Emoji>{getEmojiByScheme('gangwon')}</Emoji>
        </StyledWrapper>
      </>
  );
}

const StyledWrapper = styled.div`
  cursor: pointer;
`;

const getEmojiByScheme = (scheme: string) => {
  switch (scheme) {
    case 'light':
      return '☀️';
    case 'dark':
      return '🌙';
    case 'gangwon':
      return '⚽'; // 축구공 이모지로 변경
    default:
      return '❓';
  }
};

export default ThemeToggle;


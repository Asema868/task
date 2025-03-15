import React from "react";
import CharacterItem from "./CharacterItem";
import { Box, styled } from "@mui/material";

const CharacterList = ({ characters = [] }) => {
  return (
    <StyledBox>
      {characters.length === 0 ? (
        <h1>no</h1>
      ) : (
        characters.map((item) => <CharacterItem key={item.id} {...item} />)
      )}
    </StyledBox>
  );
};

export default CharacterList;
const StyledBox = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  };
});

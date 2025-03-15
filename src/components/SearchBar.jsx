import { Container, TextField, Typography } from "@mui/material";
import React from "react";

export const SearchBar = ({ onChange, value }) => {
  return (
    <Container>
      <Typography variant="h6">Search Character:</Typography>
      <TextField
        onChange={onChange}
        value={value}
        placeholder="Search character by name"
        fullWidth
      />
    </Container>
  );
};

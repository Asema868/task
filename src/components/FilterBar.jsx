import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "../utils/constants/general";
import { useSearchParams } from "react-router";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genderValue = searchParams.get("gender") || "";
  const statusValue = searchParams.get("status") || "";

  const statusValueHandler = (e) => {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
  };

  const genderValueHandler = (e) => {
    searchParams.set("gender", e.target.value);
    setSearchParams(searchParams);
  };

  const resetHandler = () => {
    searchParams.delete("gender");
    searchParams.delete("status");
    setSearchParams(searchParams);
  };
  return (
    <WrapperFilterBar>
      <Typography variant="h6" style={{ marginBottom: "0.5rem" }}>
        Filter by:
      </Typography>

      <Container>
        <FormControl>
          <FormLabel>Gender</FormLabel>

          <StyledRadioGroup onChange={genderValueHandler} value={genderValue}>
            {GENDER_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                label={option.label}
                value={option.value}
                control={<Radio />}
              />
            ))}
          </StyledRadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Status</FormLabel>
          <StyledRadioGroup onChange={statusValueHandler} value={statusValue}>
            {STATUS_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                label={option.label}
                value={option.value}
                control={<Radio />}
              />
            ))}
          </StyledRadioGroup>
        </FormControl>
      </Container>

      <Button onClick={resetHandler} variant="contained">
        Clear all
      </Button>
    </WrapperFilterBar>
  );
};

export default FilterBar;
const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    "& > .form": {
      border: "1px solid #d4e1dd",
      padding: "0.5rem",
      borderRadius: "1rem",
      flex: "1",
    },
  };
});

const StyledRadioGroup = styled(RadioGroup)(() => {
  return {
    flexDirection: "row",
  };
});

const WrapperFilterBar = styled("div")(() => {
  return {
    padding: "2rem",
  };
});

import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Container, styled } from "@mui/material";
import FilterBar from "../components/FilterBar";
import CharacterList from "../components/character/CharacterList";
import { useDebounce } from "use-debounce";
import { useParams, useSearchParams } from "react-router";
import { serializeObjectToQueryParams } from "../utils/helpers/general";

const fetchCharacters = async (searchByName, gender, status) => {
  try {
    const characterName = gender ? "?name=" + gender : "";

    const params = serializeObjectToQueryParams({
      name: searchByName,
      gender: gender,
      status: status,
    });
    const response = await fetch(
      "https://rickandmortyapi.com/api/character" + params
    );
    const { results } = await response.json();

    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [searchByNameDebounce] = useDebounce(searchByName, 1000);
  const [searchParams] = useSearchParams();

  const gender = searchParams.get("gender") || "";

  const status = searchParams.get("status") || "";

  useEffect(() => {
    fetchCharacters(searchByNameDebounce, gender, status)
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, [searchByNameDebounce, gender, status]);

  const searchByNameHandler = (e) => {
    setSearchByName(e.target.value);
  };

  return (
    <StyledContainer>
      <header>
        <SearchBar onChange={searchByNameHandler} value={searchByName} />
        <FilterBar />
      </header>
      <main style={{ display: "flex" }}>
        <CharacterList characters={characters} />
      </main>
    </StyledContainer>
  );
};

export default CharacterPage;
const StyledContainer = styled(Container)(() => {
  return {
    padding: "1rem",
    backgroundColor: "aliceblue",
  };
});

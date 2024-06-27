import { useEffect, useState } from "react";
import { fetchCountry } from "../api/Country";
import { Country } from "../type/CountryType";
import CountryCard from "./CountryCard";
import { Body, MapCard, Title } from "./styled";

const ContryList = () => {
  const [lists, setLists] = useState<Country[]>([]);
  const [choice, setChoice] = useState<Country[]>([]);
  useEffect(() => {
    const getContryApi = async () => {
      try {
        const data: Country[] = await fetchCountry();
        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContryApi();
  }, []);

  const togleHandle = (lists: Country) => {
    if (
      !choice.find(
        (choice: Country) => choice.name.common === lists.name.common
      )
    ) {
      setChoice([...choice, lists]);
    } else {
      setChoice(
        choice.filter(
          (choice: Country) => choice.name.common !== lists.name.common
        )
      );
    }
  };
  return (
    <Body>
      <Title>Choice</Title>
      <MapCard>
        {choice.map((list) => (
          <CountryCard list={list} togleHandle={togleHandle} />
        ))}
      </MapCard>
      <Title>Country</Title>
      <MapCard>
        {lists.map((list) => (
          <CountryCard
            key={list.name.common}
            list={list}
            togleHandle={togleHandle}
          />
        ))}
      </MapCard>
    </Body>
  );
};

export default ContryList;

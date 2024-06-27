import { Country } from "../type/CountryType";
import { Card, Img, Name } from "./styled";

interface Props {
  list: Country;
  togleHandle: (list: Country) => void;
}

const CountryCard = ({ list, togleHandle }: Props) => {
  return (
    <Card onClick={() => togleHandle(list)}>
      <Img src={list.flags.png} />

      <Name> {list.name.common}</Name>
    </Card>
  );
};

export default CountryCard;

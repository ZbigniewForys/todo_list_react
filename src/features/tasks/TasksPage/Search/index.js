import { Wrapper } from "./styled";
import Input from "../../Input";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const Search = () => {
  const query = useQueryParameter("szukaj");
  const replaceQueryParameter = useReplaceQueryParameter();
  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: "szukaj",
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj"
        value={query || ""}
        onChange={onInputChange}
      ></Input>
    </Wrapper>
  );
};
export default Search;

import { Item, List, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink activeClassName="active" to="/tasks">
            Zadania
          </StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink activeClassName="active" to="/author">
            O autorze
          </StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
export default Navigation;

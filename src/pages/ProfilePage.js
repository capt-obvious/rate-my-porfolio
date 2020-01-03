import React from "react";
import styled from "styled-components";
import { Spinner } from 'reactstrap'
import Avatar from "../components/Avatar";
import Posts from "../components/Posts";
import PortfolioGraph from "../components/PortfolioGraph";
import { ProfileContainer } from "../components/Containers";
import { Header1, SubHeader } from "../components/Headers";
import { ProfileText } from "../components/Text";
import { UserContext } from "../utils/Contexts";

const StyledSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1em;
  border: 1px solid black;
  border-radius: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserSection = styled(StyledSection)``;

const HoldingsSection = styled(StyledSection)``;

const Holdings = styled.div`
  background: lightgray;
  padding: 1em;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  font-weight: bold;
`;
const GraphSection = styled(StyledSection)``;
const PortfolioSection = styled(StyledSection)``;
const PostsSection = styled(StyledSection)``;

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
`;

const ProfilePage = () => {
  const [loading, setLoading] = React.useState(false)
  const [companies, setCompanies] = React.useState(['Company 1', 'Company 2', 'Company 3'])

  const { user, setUser } = React.useContext(UserContext)
  console.log(user, setUser)

  const loadData = () => {
    setLoading(true)
    setLoading(false)
  }

  React.useEffect(() => {
    loadData()
  }, [])

  return loading ? <Spinner color="primary" /> : <ProfileContainer>
    <UserSection>
      <Avatar />
      <Header1>Username</Header1>
      <ProfileText>User Bio</ProfileText>
      <Row>
        <ProfileText>10 Followers</ProfileText><ProfileText>10 Following</ProfileText>
      </Row>
      <ProfileText>Location, stat</ProfileText>
    </UserSection>
    <HoldingsSection>
      <Header1>Top 10 Holdings</Header1>
      <Holdings>
        {companies.map((company, idx) => <div key={idx}>{company}</div>)}
      </Holdings>
    </HoldingsSection>
    <GraphSection>
      <PortfolioGraph />
    </GraphSection>
    <PortfolioSection>
      <Header1>Portfolio Value</Header1>
      <p>$14,642.00</p>
      <SubHeader>Annualized Total Return</SubHeader>
      <p>18%</p>
    </PortfolioSection>
    <PostsSection>
      <Header1>Posts</Header1>
      <Posts />
    </PostsSection>
  </ProfileContainer>
}

export default ProfilePage;

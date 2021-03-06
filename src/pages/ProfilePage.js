import React from "react";
import styled from "styled-components";
import axios from "axios";
import Avatar from "../components/Avatar";
import Loading from '../components/Loading'
import Posts from "../components/Posts";
import PortfolioGraph from "../components/PortfolioGraph";
import { ProfileContainer } from "../components/Containers";
import { Header1, SubHeader } from "../components/Headers";
import { ProfileText } from "../components/Text";

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

const ProfilePage = props => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({})
  const [companies, setCompanies] = React.useState([
    "Company 1",
    "Company 2",
    "Company 3"
  ]);

  const fetchData = () => {
    setLoading(true);
    const token = window.localStorage.getItem("token");
    axios({
      method: "get",
      url: `http://localhost:3300/api/users/${props.match.params.id}`,
      headers: {
        "Authorization": token
      }
    })
      .then(res => {
        setLoading(false);
        setUser(res.data);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return loading ? <Loading /> : <ProfileContainer>
    <UserSection>
      <Avatar />
      <Header1>{user.username}</Header1>
      <ProfileText>User Bio</ProfileText>
      <Row>
        <ProfileText>10 Followers</ProfileText><ProfileText>10 Following</ProfileText>
      </Row>
      <ProfileText>{`${user.city}, ${user.country}`}</ProfileText>
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

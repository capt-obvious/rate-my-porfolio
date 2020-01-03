import styled from "styled-components";

const Avatar = styled.img.attrs(props => ({
  src: "https://avatars.dicebear.com/v2/male/eian.svg",
  alt: props.alt || ""
}))`
  border: 1px solid gray;
  border-radius: 100px;
  width: 150px;
  height: 150px;
  vertical-align: middle;
  object-fit: cover;
`;

export default Avatar;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SPrimaryButton = styled(BaseButton)`
  background-color: #40514e;
`;

//BaseButtonを使わない記述は↓↓↓

// const SButton = styled.button`
// background-color: #40514e;
// color: #fff;
// padding: 6px 24px;
// border: none;
// border-radius: 9999px;
// outline: none;
// &:hover{
//   cursor: pointer;
//   opacity: 0.8;
// }
// `

export const SSecondaryButton = styled(BaseButton)`
  background-color: #11999e;
`;

export const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;

export const SCheckbox = styled.input`
box-sizing: border-box;
cursor: pointer;
display: inline-block;
padding: 5px 30px;
position: relative;
width: auto;
&::before {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  content: "";
  display: block;
  height: 16px;
  left: 5px;
  margin-top: -8px;
  position: absolute;
  top: 50%;
  width: 16px;
  transform: translateX(-50%);
}
&::after {
  border-right: 6px solid #00cccc;
  border-bottom: 3px solid #00cccc;
  content: "";
  display: block;
  height: 20px;
  left: 7px;
  margin-top: -16px;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: rotate(45deg) translate3d(5px, 2px, 10px)
    scale3d(0.7, 0.7, 1);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform-origin: top left;
  width: 9px;
}
&:checked {
  &::before {
    border-color: #666;
  }
}
&:checked {
  &::after {
    opacity: 1;
    transform: rotate(45deg) scale3d(1,1,1);
  }
}
`;


export const STextInput = styled.input`
padding: 8px 16px;
border: solid #ddd 1px;
border-radius: 999px;
outline: none;
`;

export const SFooter = styled.footer`
  background-color: #399b9f;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const SHeader = styled.header`
background-color: #399b9f;
color: #fff;
text-align: center;
padding: 8px 0;
`;


export const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 8px;
`

export const SSelect = styled.select`
  padding: 8px 16px;
border: solid #ddd 1px;
border-radius: 999px;
outline: none;
`

export const SRoot = styled.div`

/* background-color: #f9f8f4; */
/* margin: 0; */
min-height: 100vh;

`

export const SCheckboxContainer = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

export const SButtonWrapper = styled.span`
  padding-left: 8px;
`;

export const SSelectContainer = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

export const STextCenterContainer = styled.div`
  text-align: center;
`;

export const SImg = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
`;

export const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #405145;
`;

export const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

export const SUserInfoContainer = styled.div`
margin: 0 auto;
width: 80%;
max-width: 800px;
min-width: 400px;
`

export const SUserCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
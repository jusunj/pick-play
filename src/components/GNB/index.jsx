import React from "react";
import LogoProbe from "../LogoProbe";
import styled from "styled-components";

import { Link } from "react-router-dom";

import {Body16, MonoBlack} from "../../styledMixins"

let menu = [
  {
    'name': '홈', 
    'link': '/'
  },
  {
    'name': '성향 분석', 
    'link': '/personality'
  },
  {
    'name': '상품', 
    'link': '/products'
  },
  {
    'name': '콘텐츠', 
    'link': '/contents'
  },
  {
    'name': '커뮤니티',
    'link': '/community'
  }
]

function GNB() {
  return (
    <GnbStyle>
      <LogoProbe></LogoProbe>
      <MenuStyle>
      {
        menu.map((item, index) => {
          return <Link to={item.link}>
                    <Menu key={index}>
                      <MenuDiv>{item.name}</MenuDiv>
                    </Menu>
                  </Link>
        })
      }
      </MenuStyle>
    </GnbStyle>
  );
}

const GnbStyle = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
  border: 1px none;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  z-index: 5;
  margin: 0 auto;
  @media (max-width: 1201px) {
    width: 100%;
  }
`;

const MenuStyle = styled.ul`
  list-style: none;
  
`;

const Menu = styled.li`
  float: left;
`;

const MenuDiv = styled.div`
  width: 60px;
  height: 24px;
  ${Body16}
  ${MonoBlack}
  margin-left: 40px;
  //border: 1px solid red;
  text-align: center;
`;



export default GNB;
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import artCharacter from "../data/image/artCharacter.png";
import readCharacter from "../data/image/readCharacter.png";
import languageCharacter from "../data/image/languageCharacter.png";
import exerciseCharacter from "../data/image/exerciseCharacter.png";
import researchCharacter from "../data/image/researchCharacter.png";
import sensibilityCharacter from "../data/image/sensibilityCharacter.png";
import { Body15, Header36 } from "../styledMixins";

const AnalysisCharacter = () => {
  const userInformation = useSelector((state) => state.userInfo.userInfo[0]);

  const art = Math.floor(userInformation && userInformation.tendency1);
  const read = Math.floor(userInformation && userInformation.tendency2);
  const language = Math.floor(userInformation && userInformation.tendency3);
  const exercise = Math.floor(userInformation && userInformation.tendency4);
  const research = Math.floor(userInformation && userInformation.tendency5);
  const sensibility = Math.floor(userInformation && userInformation.tendency6);

  const artColor = "#FBB562";
  const readColor = "#FECA46";
  const languageColor = "#F26359";
  const exerciseColor = "#93D0F1";
  const researchColor = "#B13F69";
  const sensibilityColor = "#F8B3C5";

  let obj = {
    art: art,
    read: read,
    language: language,
    exercise: exercise,
    research: research,
    sensibility: sensibility,
  };

  let highRate = Object.keys(obj).find(
    (key) => obj[key] === Math.max(...Object.values(obj))
  );

  return (
    <StyledAnalysisCharacter>
      <div className="characterLayout">
        <img
          className="character"
          src={
            highRate === "art"
              ? artCharacter
              : highRate === "read"
              ? readCharacter
              : highRate === "language"
              ? languageCharacter
              : highRate === "exercise"
              ? exerciseCharacter
              : highRate === "research"
              ? researchCharacter
              : highRate === "sensibility"
              ? sensibilityCharacter
              : ""
          }
        />
      </div>
      <div>
        <div className="mainText">
          <span
            style={{
              color:
                highRate === "art"
                  ? artColor
                  : highRate === "read"
                  ? readColor
                  : highRate === "language"
                  ? languageColor
                  : highRate === "exercise"
                  ? exerciseColor
                  : highRate === "research"
                  ? researchColor
                  : highRate === "sensibility"
                  ? sensibilityColor
                  : "black",
            }}
          >
            {highRate === "art"
              ? "?????????"
              : highRate === "read"
              ? "?????????"
              : highRate === "language"
              ? "?????????"
              : highRate === "exercise"
              ? "?????????"
              : highRate === "research"
              ? "?????????"
              : "?????????"}
          </span>
          {`??? ?????? ${
            userInformation ? userInformation.name : "?????????"
          } ??????????????? ???????????? ${
            window.location.href.includes("product") ? "??????" : "?????????"
          }?????????!`}
        </div>
        <div className="subText">
          {`${
            userInformation ? userInformation.name : "?????????"
          } ???????????? ????????? 360?????? ${
            window.location.href.includes("product") ? "?????????" : "?????????"
          } ????????? ????????????.`}
        </div>
      </div>
    </StyledAnalysisCharacter>
  );
};

const StyledAnalysisCharacter = styled.div`
  width: 1200px;
  height: 200px;
  margin-top: 40px;

  display: flex;
  align-items: center;

  .characterLayout {
    border: 2px solid #f5f5f5;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    margin-right: 40px;
  }

  .character {
    width: 170px;
    height: 127px;
    margin-left: 15px;
  }

  .mainText {
    ${Header36};
    width: 470px;
  }

  .subText {
    ${Body15};
    margin-top: 16px;
  }
`;

export default AnalysisCharacter;

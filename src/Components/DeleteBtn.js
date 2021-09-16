import React from "react";
import styled from "styled-components";
import axios from "axios";

const ButtonContainer = styled.div``;

const Button = styled.button`
  padding: 10px 50px;
`;

const ButtonText = styled.span``;

const DeleleteBtn = ({ userInfo }) => {
  //   console.log(userInfo);
  let userIds = [];
  let userIdxs = [];
  let users = [];
  const BaseURL = "https://www.gpsdemo.shop/";

  userInfo.forEach((user) => {
    //아이디, 인덱스 뽑아내기
    if (!userIds.includes(user.id)) userIds.push(user.id);
    if (!userIdxs.includes(user.userIdx)) userIdxs.push(user.userIdx);
  });

  for (let i = 0; i < userIds.length; i++) {
    users.push([userIds[i], userIdxs[i]]);
  }

  const onClickDeleteBtn = async (userIdx) => {
    await axios
      .patch(`${BaseURL}locations/status/all`, {
        userIdx: userIdx,
        status: "N",
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <ButtonContainer
      style={{
        position: "absolute",
        bottom: "50px",
        left: "50px",
        zIndex: "100",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {users.map((user) => {
        return (
          <Button
            onClick={() => onClickDeleteBtn(user[1])}
            key={user[1]}
            className={user[1]}
          >
            <ButtonText>
              Delete{"  "}
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {user[0]}
              </span>
              {"  "}
              Locations
            </ButtonText>
          </Button>
        );
      })}
    </ButtonContainer>
  );
};

export default DeleleteBtn;

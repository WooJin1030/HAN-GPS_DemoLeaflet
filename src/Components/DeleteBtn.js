import React from "react";
import styled from "styled-components";
import useAxios from "axios-hooks";

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

  //   let response = await fetch(`${Base_URL}locations/status/all`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         userIdx: locationUser[i].userIdx,
  //         status: "N",
  //       }),
  //     });
  //     let data = await response.json();
  //     console.log(data);
  //    }

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
          <Button onClick={() => {}} key={user[1]} className={user[1]}>
            <ButtonText>{user[0]}</ButtonText>
          </Button>
        );
      })}
    </ButtonContainer>
  );
};

export default DeleleteBtn;

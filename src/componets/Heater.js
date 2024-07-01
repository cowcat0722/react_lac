import React from 'react';
import styled from "styled-components";

const MyLi = styled.li`
        color : green;
        font-size: 30px;
    `;

const MyUl = styled.ul`
color : green;
font-size: 30px;
`;

function Header() {
    return (
        <div>
            <ul>
                <MyLi>홈</MyLi>
                <MyLi>글쓰기</MyLi>
                <MyLi>로그아웃</MyLi>
            </ul>
        </div>
    );
}
export default Header;
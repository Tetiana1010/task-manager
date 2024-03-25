'use client';

import React from "react";
import styled from "styled-components";
import { useGlobalState } from '@/app/context/GlobalProvider';
import Image from "next/image";
import menu from '@/app/utils/menu'
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { arrowLeft, bars, logout } from "@/app/utils/Icons"; 

const Sidebar = () => {

  const { theme } = useGlobalState();

  const router = useRouter();

  const handleClick = (link: string) => {{
    router.push(link);
  }};

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          <div className="image">
            <Image width={70} height={70} src="/avatar1.png" alt="profile" />
          </div>
          <h1>
            <span>John</span>
            {' '}
            <span>Rostros</span>
          </h1>
          <ul className="nav-items">
            {
              menu.map((item => {
                return (
                  <li className={`nav-item`} onClick={() => {handleClick(item.link)}}>
                    {item.icon}
                    <Link href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                )
              }))
            }
          </ul>
        </div>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${props => props.theme.SidebarWidth};
  background-color: ${props => props.theme.colorBg2};
  border: 2px solid ${(props => props.theme.borderColor2)};
  border-radius: 1rem;
`;

export default Sidebar;
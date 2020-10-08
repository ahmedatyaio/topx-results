import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Logo from '../assets/svgs/logo.svg'
import Menu from '../assets/svgs/menu.svg'
import ChevronDown from '../assets/svgs/chevron-down.svg'
import Container from './Container'

const StyledNavbar = styled.nav`
    background: white;
    /* padding: 1.8rem 0; */
    padding: 1.8rem 4rem;
    position: relative;
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    .flex {
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }
    .logo-section {
        display: flex;
        align-items: center;
        button {
            padding: 0;
            margin:0;
            margin-left: 2rem;
            background-color: transparent;
            border:0;
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-weight: bold;
        }
    }
    .mobile-menu-trigger {
        background: #6a3cbc;
        border: 0;
        svg {
            fill: white;
        }
    }
    ul.menu-section {
        display: none;
    }

    .mobile-menu {
        position: absolute;
        top: 100%;
        background: #6a3cbc;
        left: 0;
        width: 100%;
        padding: 1.4rem 0;
        margin: 0;
        transform: translateY(-100%);
        pointer-events: none;
        opacity: 0;
        transition: 0.5s all ease-in-out;
        &.active {
            opacity: 1;
            transform: translateY(0);
            z-index: 100;
        }
        li {
            a {
                color: white;
                text-decoration: none;
                padding: 0 4rem;
                margin: 1rem 0;
                display: inline-block;
                font-size: 1.4rem;
            }
        }
    }

    @media (min-width: 768px) {
        .mobile-menu-trigger {
            display: none;
        }
        ul.menu-section {
        display: flex;
        align-items: center;
        list-style: none;
        li {
            margin-left: 2rem;
            font-size: 1.6rem;
            &.cta {
                background: #7B31C9;
                border-radius: 4px;
                a {
                padding: 1.2rem 2rem;
                color: white;
                display: inline-block;
                }
            }
            a {
                text-decoration: none;
                color: #2B2B2B;
            }
        }
    }
    }

`

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    console.log(mobileMenuActive)

    return (
        <StyledNavbar>
            <>
            <Container>
                <div className="flex">
                    <div className="logo-section">
                        <Logo />
                        <button><span>Py</span><ChevronDown /></button>
                    </div>
                    <button onClick={() => setMobileMenuActive(prevState => !prevState)} className="mobile-menu-trigger"><Menu /></button>
                    <ul className="menu-section">
                        <li>
                            <Link href="/">
                                    <a>Вход</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                    <a>Регистрация</a>
                            </Link>
                        </li>
                        <li className="cta">
                            <Link href="/">
                                    <a>Стать специалистом</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
                <ul className={mobileMenuActive ? "mobile-menu active" : "mobile-menu"}>
                    <li>
                        <Link href="/">
                                <a>Вход</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                                <a>Регистрация</a>
                        </Link>
                    </li>
                    <li className="cta">
                        <Link href="/">
                                <a>Стать специалистом</a>
                        </Link>
                    </li>
                </ul>
            </>
        </StyledNavbar>
    )
}

export default Navbar

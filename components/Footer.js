import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Logo from '../assets/svgs/logo.svg'

const StyledFooter = styled.footer`
    background: white;
    margin-top: 4rem;
    padding: 2rem 2.4rem;
    .flex {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .left {
            display: flex;
            flex-direction: column;
            ul {
                display: flex;
                flex-direction: column;
                list-style: none;
                padding: 0;
                li {
                    margin-top: 1.4rem;
                    a {
                        text-decoration: none;
                        font-size: 1.4rem;
                        color: #565459;
                    }
                }
            }
        }
        .copyright {
            font-size: 1.4rem;
        }
    }
    @media (min-width: 768px) {
        .flex {
            flex-direction: row;
            align-items: center;
            .left {
                flex-direction: row;
                align-items: center;
                ul {
                    flex-direction: row;
                    margin-left: 2rem;
                    li {
                        margin-right: 2rem;
                        margin-top: 0;
                    }
                }
            }
        }
    }
    @media (min-width: 1600px) {
        padding: 2rem 0;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <div className="flex">
                    <div className="left">
                        <Logo />
                        <ul>
                            <li><a href="#">Конфиденциальность</a></li>
                            <li><a href="#">Соглашение</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>
                    <p className="copyright">© 2020 TopX</p>
                </div>
            </Container>
        </StyledFooter>
    )
}

export default Footer

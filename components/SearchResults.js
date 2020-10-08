import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Container from './Container'

import Star from '../assets/svgs/star.svg'
import StarGrey from '../assets/svgs/star-grey.svg'

const StyledSearchResults = styled.div`
    .flex {
        h2 {
            margin-top: 3.2rem;
            font-size: 2rem;
        }
        display: flex;
        flex-direction: column;
        .search-results {
            padding: 0 2.4rem;
            flex: 1;
            .results-box {
                width: 100%;
                .result {
                    margin-top: 2.4rem;
                    padding: 2rem 0;
                    display: flex;
                    flex-direction: column;
                    border-top: 2px solid #E2E2E9;
                    .right {
                        display: flex;
                        flex-direction: column;
                        .message {
                            display: flex;
                            flex-direction: column;
                            p {
                                font-size: 1.4rem;
                            }
                        }
                        a {
                            background-color: #335EDB;
                            color: white;
                            text-decoration: column;
                            padding: 1rem 2rem;
                            border-radius: 0.4rem;
                            font-size: 1.4rem;
                            align-self: flex-start;
                        }
                    }
                    .left {
                        display: flex;
                        flex-direction: column;
                        img {
                            width: 12rem;
                            align-self: flex-start;
                        }
                        .result-details {
                            margin-top: 1.6rem;
                            h4 {
                                margin: 0;
                                font-size: 1.6rem;
                            }
                            .reviews {
                                display: flex;
                                align-items: center;
                                span {
                                    margin-right: 1rem;
                                    font-size: 1.4rem;
                                }
                                svg {
                                    width: 1.4rem;
                                }
                                p {
                                    margin-left: 1rem;
                                    font-size: 1.4rem;
                                }
                            }
                            .trophies {
                                display: flex;
                                align-items: center;
                                font-size: 1.2rem;
                                span {
                                    margin: 0 1rem;
                                }
                                p {
                                    margin: 0;
                                }
                            }
                            .details {
                                font-size: 1.4rem;
                            }
                     }
                    }
                }
            }
        }
        .sidebar {
            padding: 0 2.4rem;
            border-right: 2px solid #E2E2E9;
            padding-right: 2rem;
            h3 {
                font-size: 1.6rem;
                color: #2B2B2B;
            }
            .search {
                .field-group {
                    position: relative;
                    width: 100%;
                    max-width: 25rem;
                    .icon {
                        position: absolute;
                        right: -1.5rem;
                        top: 0.8rem;
                    }
                    input {
                        position: absolute;
                        width: 100%;
                        padding: 1rem 2rem;
                        font-size: 1.4rem;
                        color: #B5B5BE;
                        border: 1.5px #E2E2E9;
                        border-radius: 4px;
                        &::-webkit-input-placeholder {/* Chrome/Opera/Safari/Edge */
                            /*styles here*/
                            color: #B5B5BE;
                        }

                        &::-ms-input-placeholder { /* Microsoft Edge */
                        /*styles here*/
                            color: #B5B5BE;
                        }

                        &:-ms-input-placeholder {/* IE 10+ */
                            /*styles here*/
                            color: #B5B5BE;
                        }
                    }
                }
            }
            .filters {
                margin-top: 8rem;
                .filter {
                    margin-top: 2.4rem;
                    font-size: 1.4rem;
                    label {
                        display: flex;
                        align-items: center;
                    }
                    input {
                        margin-right: 1.2rem;
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
        }
    }
    @media (min-width: 768px) {
        .flex .search-results .results-box .result {
            .left {
                flex-direction: row;
                .result-details {
                    margin-left: 1.6rem;
                }
            }
            flex-direction: row;
        }
    }
    @media (min-width: 1280px) {
        .flex {
            flex-direction: row;
            .sidebar {     
                padding: 0 4rem;
                max-width: 25%;
            }
            .search-results {
                padding: 0 4rem;
                .results-box .result {
                    align-items: center;
                    .left {
                        width: 70%;
                    }
                    .right {
                        width: 30%;
                        flex-direction: column;
                        align-items: flex-end;
                        .message {
                            align-items: flex-end;
                        }
                        a {
                            align-self: flex-end;
                        }
                    }
                }
            }
        }
    }
@media (min-width: 1600px) {
    .flex {
        .sidebar {     
            padding: 0;
        }
        .search-results {
            padding: 0 6rem;
        }
    }
}
`

const SearchResults = () => {
    return (
        <StyledSearchResults>
            <Container>
                <div className="flex">
                    <div className="sidebar">
                        <h2>Фильтр</h2>
                        <div className="search">
                            <h3>Когда это событие</h3>
                            <div className="field-group">
                                <input type="text" placeholder="Выберите дату" />
                                <span className="icon">
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.73913 4.68693V1.3478C5.73913 0.61737 6.31304 0.043457 7.04348 0.043457C7.77391 0.043457 8.34783 0.61737 8.34783 1.3478V4.68693C8.34783 5.41737 7.77391 5.99128 7.04348 5.99128C6.31304 5.99128 5.73913 5.41737 5.73913 4.68693ZM16.9565 5.99128C17.687 5.99128 18.2609 5.41737 18.2609 4.68693V1.3478C18.2609 0.61737 17.687 0.043457 16.9565 0.043457C16.2261 0.043457 15.6522 0.61737 15.6522 1.3478V4.68693C15.6522 5.41737 16.2261 5.99128 16.9565 5.99128ZM24 3.01737V20.6522C24 21.2261 23.5304 21.6956 22.9565 21.6956H1.04348C0.469565 21.6956 0 21.2261 0 20.6522V3.01737C0 2.44346 0.469565 1.86954 1.04348 1.86954H3.46957C4.04348 1.86954 4.51304 2.33911 4.51304 2.91302C4.51304 3.48694 4.04348 3.9565 3.46957 3.9565H2.08696V8.39128H21.913V3.9565H20.5304C19.9565 3.9565 19.487 3.48694 19.487 2.91302C19.487 2.33911 19.9565 1.86954 20.5304 1.86954H22.9565C23.5304 1.86954 24 2.44346 24 3.01737ZM21.913 19.6087V10.2174H2.08696V19.6087H21.913ZM10.3565 3.9565H13.6435C14.2174 3.9565 14.687 3.48694 14.687 2.91302C14.687 2.33911 14.2174 1.86954 13.6435 1.86954H10.3565C9.78261 1.86954 9.31304 2.33911 9.31304 2.91302C9.31304 3.48694 9.78261 3.9565 10.3565 3.9565Z" fill="#B5B5BE"/>
                                </svg>
                                </span>
                            </div>
                        </div>
                        <div className="filters">
                            <h3>Какие услуги вам нужны?</h3>
                            <div className="filter">
                                <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    <span className="filter-name">Консультации по проекту</span>
                                </label>
                            </div>
                            <div className="filter">
                                <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    <span className="filter-name">Чертежи дизайна</span>
                                </label>
                            </div>
                            <div className="filter">
                                <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    <span className="filter-name">Помощь в выборе мастера</span>
                                </label>
                            </div>
                            <div className="filter">
                                <label class="container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    <span className="filter-name">Нормативные документы в строительстве</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="search-results">
                        <h2>Физиотерапия</h2>
                        <div className="results-box">
                            <div className="result">
                                <div className="left">
                                    <img src="/images/result.jpg" alt=""/>
                                    <div className="result-details">
                                        <h4>RENDERBEAM - 3D Rendering studio</h4>
                                        <div className="reviews">
                                            <span>0</span>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <StarGrey />
                                            <p>(0)</p>
                                        </div>
                                        <div className="trophies">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51175 0.666667C2.74229 0.268132 3.17319 0 3.66671 0H10.3334C10.8269 0 11.2578 0.268132 11.4883 0.666667H12.3334C13.0698 0.666667 13.6667 1.26362 13.6667 2V4C13.6667 6.14856 12.6636 7.71592 10.8543 7.96523C10.1325 9.02011 8.98904 9.7636 7.66671 9.95274V10.6667H8.33337C9.06975 10.6667 9.66671 11.2636 9.66671 12H4.33337C4.33337 11.2636 4.93033 10.6667 5.66671 10.6667H6.33337V9.95274C5.01104 9.7636 3.86753 9.02011 3.14581 7.96523C1.33643 7.71592 0.333374 6.14856 0.333374 4V2C0.333374 1.26362 0.930328 0.666667 1.66671 0.666667H2.51175ZM2.33337 2H1.66671V4C1.66671 5.02084 1.92689 5.7831 2.41859 6.22566C2.36267 5.93683 2.33337 5.6385 2.33337 5.33333V2ZM11.6667 2V5.33333C11.6667 5.6385 11.6374 5.93683 11.5815 6.22566C12.0732 5.7831 12.3334 5.02084 12.3334 4V2H11.6667ZM3.66671 1.33333V5.33333C3.66671 7.17428 5.15909 8.66667 7.00004 8.66667C8.84099 8.66667 10.3334 7.17428 10.3334 5.33333V1.33333H3.66671Z" fill="#565459"/>
                                            </svg>
                                            <span>0</span>
                                            <p>раз принят на работу</p>
                                        </div>
                                        <p className="details">
                                            Основатель Абдуллох Иногомов. Наша студия предоставляет высококлассные услуги 3D-рендеринга для архитекторов
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="message">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5599 10.5199C22.5599 15.5599 17.8559 19.6399 11.9999 19.6399C10.9919 19.6399 10.0319 19.5439 9.11994 19.3039C9.11994 19.3039 7.29594 21.5599 4.31994 21.5599C5.75994 19.4959 5.75994 17.8639 5.75994 17.8639C3.11994 16.1839 1.43994 13.5439 1.43994 10.5199C1.43994 5.4799 6.14394 1.3999 11.9999 1.3999C17.8559 1.3999 22.5599 5.4799 22.5599 10.5199Z" stroke="#565459" stroke-width="1.859" stroke-miterlimit="10"/>
                                        </svg>
                                        <p>связаться по цене</p>
                                    </div>
                                    <a className="cta">
                                        Посетить профиль
                                    </a>
                                </div>
                            </div>   
                            <div className="result">
                                <div className="left">
                                    <img src="/images/result.jpg" alt=""/>
                                    <div className="result-details">
                                        <h4>RENDERBEAM - 3D Rendering studio</h4>
                                        <div className="reviews">
                                            <span>0</span>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <StarGrey />
                                            <p>(0)</p>
                                        </div>
                                        <div className="trophies">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51175 0.666667C2.74229 0.268132 3.17319 0 3.66671 0H10.3334C10.8269 0 11.2578 0.268132 11.4883 0.666667H12.3334C13.0698 0.666667 13.6667 1.26362 13.6667 2V4C13.6667 6.14856 12.6636 7.71592 10.8543 7.96523C10.1325 9.02011 8.98904 9.7636 7.66671 9.95274V10.6667H8.33337C9.06975 10.6667 9.66671 11.2636 9.66671 12H4.33337C4.33337 11.2636 4.93033 10.6667 5.66671 10.6667H6.33337V9.95274C5.01104 9.7636 3.86753 9.02011 3.14581 7.96523C1.33643 7.71592 0.333374 6.14856 0.333374 4V2C0.333374 1.26362 0.930328 0.666667 1.66671 0.666667H2.51175ZM2.33337 2H1.66671V4C1.66671 5.02084 1.92689 5.7831 2.41859 6.22566C2.36267 5.93683 2.33337 5.6385 2.33337 5.33333V2ZM11.6667 2V5.33333C11.6667 5.6385 11.6374 5.93683 11.5815 6.22566C12.0732 5.7831 12.3334 5.02084 12.3334 4V2H11.6667ZM3.66671 1.33333V5.33333C3.66671 7.17428 5.15909 8.66667 7.00004 8.66667C8.84099 8.66667 10.3334 7.17428 10.3334 5.33333V1.33333H3.66671Z" fill="#565459"/>
                                            </svg>
                                            <span>0</span>
                                            <p>раз принят на работу</p>
                                        </div>
                                        <p className="details">
                                            Основатель Абдуллох Иногомов. Наша студия предоставляет высококлассные услуги 3D-рендеринга для архитекторов
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="message">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5599 10.5199C22.5599 15.5599 17.8559 19.6399 11.9999 19.6399C10.9919 19.6399 10.0319 19.5439 9.11994 19.3039C9.11994 19.3039 7.29594 21.5599 4.31994 21.5599C5.75994 19.4959 5.75994 17.8639 5.75994 17.8639C3.11994 16.1839 1.43994 13.5439 1.43994 10.5199C1.43994 5.4799 6.14394 1.3999 11.9999 1.3999C17.8559 1.3999 22.5599 5.4799 22.5599 10.5199Z" stroke="#565459" stroke-width="1.859" stroke-miterlimit="10"/>
                                        </svg>
                                        <p>связаться по цене</p>
                                    </div>
                                    <a className="cta">
                                        Посетить профиль
                                    </a>
                                </div>
                            </div>  
                            <div className="result">
                                <div className="left">
                                    <img src="/images/result.jpg" alt=""/>
                                    <div className="result-details">
                                        <h4>RENDERBEAM - 3D Rendering studio</h4>
                                        <div className="reviews">
                                            <span>0</span>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <StarGrey />
                                            <p>(0)</p>
                                        </div>
                                        <div className="trophies">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51175 0.666667C2.74229 0.268132 3.17319 0 3.66671 0H10.3334C10.8269 0 11.2578 0.268132 11.4883 0.666667H12.3334C13.0698 0.666667 13.6667 1.26362 13.6667 2V4C13.6667 6.14856 12.6636 7.71592 10.8543 7.96523C10.1325 9.02011 8.98904 9.7636 7.66671 9.95274V10.6667H8.33337C9.06975 10.6667 9.66671 11.2636 9.66671 12H4.33337C4.33337 11.2636 4.93033 10.6667 5.66671 10.6667H6.33337V9.95274C5.01104 9.7636 3.86753 9.02011 3.14581 7.96523C1.33643 7.71592 0.333374 6.14856 0.333374 4V2C0.333374 1.26362 0.930328 0.666667 1.66671 0.666667H2.51175ZM2.33337 2H1.66671V4C1.66671 5.02084 1.92689 5.7831 2.41859 6.22566C2.36267 5.93683 2.33337 5.6385 2.33337 5.33333V2ZM11.6667 2V5.33333C11.6667 5.6385 11.6374 5.93683 11.5815 6.22566C12.0732 5.7831 12.3334 5.02084 12.3334 4V2H11.6667ZM3.66671 1.33333V5.33333C3.66671 7.17428 5.15909 8.66667 7.00004 8.66667C8.84099 8.66667 10.3334 7.17428 10.3334 5.33333V1.33333H3.66671Z" fill="#565459"/>
                                            </svg>
                                            <span>0</span>
                                            <p>раз принят на работу</p>
                                        </div>
                                        <p className="details">
                                            Основатель Абдуллох Иногомов. Наша студия предоставляет высококлассные услуги 3D-рендеринга для архитекторов
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="message">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5599 10.5199C22.5599 15.5599 17.8559 19.6399 11.9999 19.6399C10.9919 19.6399 10.0319 19.5439 9.11994 19.3039C9.11994 19.3039 7.29594 21.5599 4.31994 21.5599C5.75994 19.4959 5.75994 17.8639 5.75994 17.8639C3.11994 16.1839 1.43994 13.5439 1.43994 10.5199C1.43994 5.4799 6.14394 1.3999 11.9999 1.3999C17.8559 1.3999 22.5599 5.4799 22.5599 10.5199Z" stroke="#565459" stroke-width="1.859" stroke-miterlimit="10"/>
                                        </svg>
                                        <p>связаться по цене</p>
                                    </div>
                                    <a className="cta">
                                        Посетить профиль
                                    </a>
                                </div>
                            </div>  
                            <div className="result">
                                <div className="left">
                                    <img src="/images/result.jpg" alt=""/>
                                    <div className="result-details">
                                        <h4>RENDERBEAM - 3D Rendering studio</h4>
                                        <div className="reviews">
                                            <span>0</span>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <StarGrey />
                                            <p>(0)</p>
                                        </div>
                                        <div className="trophies">
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51175 0.666667C2.74229 0.268132 3.17319 0 3.66671 0H10.3334C10.8269 0 11.2578 0.268132 11.4883 0.666667H12.3334C13.0698 0.666667 13.6667 1.26362 13.6667 2V4C13.6667 6.14856 12.6636 7.71592 10.8543 7.96523C10.1325 9.02011 8.98904 9.7636 7.66671 9.95274V10.6667H8.33337C9.06975 10.6667 9.66671 11.2636 9.66671 12H4.33337C4.33337 11.2636 4.93033 10.6667 5.66671 10.6667H6.33337V9.95274C5.01104 9.7636 3.86753 9.02011 3.14581 7.96523C1.33643 7.71592 0.333374 6.14856 0.333374 4V2C0.333374 1.26362 0.930328 0.666667 1.66671 0.666667H2.51175ZM2.33337 2H1.66671V4C1.66671 5.02084 1.92689 5.7831 2.41859 6.22566C2.36267 5.93683 2.33337 5.6385 2.33337 5.33333V2ZM11.6667 2V5.33333C11.6667 5.6385 11.6374 5.93683 11.5815 6.22566C12.0732 5.7831 12.3334 5.02084 12.3334 4V2H11.6667ZM3.66671 1.33333V5.33333C3.66671 7.17428 5.15909 8.66667 7.00004 8.66667C8.84099 8.66667 10.3334 7.17428 10.3334 5.33333V1.33333H3.66671Z" fill="#565459"/>
                                            </svg>
                                            <span>0</span>
                                            <p>раз принят на работу</p>
                                        </div>
                                        <p className="details">
                                            Основатель Абдуллох Иногомов. Наша студия предоставляет высококлассные услуги 3D-рендеринга для архитекторов
                                        </p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="message">
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5599 10.5199C22.5599 15.5599 17.8559 19.6399 11.9999 19.6399C10.9919 19.6399 10.0319 19.5439 9.11994 19.3039C9.11994 19.3039 7.29594 21.5599 4.31994 21.5599C5.75994 19.4959 5.75994 17.8639 5.75994 17.8639C3.11994 16.1839 1.43994 13.5439 1.43994 10.5199C1.43994 5.4799 6.14394 1.3999 11.9999 1.3999C17.8559 1.3999 22.5599 5.4799 22.5599 10.5199Z" stroke="#565459" stroke-width="1.859" stroke-miterlimit="10"/>
                                        </svg>
                                        <p>связаться по цене</p>
                                    </div>
                                    <a className="cta">
                                        Посетить профиль
                                    </a>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </Container>
        </StyledSearchResults>
    )
}

export default SearchResults

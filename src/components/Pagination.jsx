import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Pagination = ({postPerPage, totalPost, setActualPage, actualPage}) => {
    const pageNumbers = []
    //limit btn
    const [actualBtn, setActualBtn] = useState(1)
    const buttonPerPage = 5;
    const lastIndex = actualBtn * buttonPerPage
    const firtsIndex = lastIndex - buttonPerPage


    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }
    const buttonLimit = pageNumbers.slice(firtsIndex, lastIndex)

    const increment = () => {
        if (actualPage < pageNumbers[pageNumbers.length-1]) {
            setActualPage(actualPage + 1)
            window.scrollTo(0, 0)
        }
    }

    const decrement = () => {
        if (actualPage > 1) {
            setActualPage(actualPage - 1)
            window.scrollTo(0, 0)
        }
    }

    const changeActualPage = (number) => {
        setActualPage(number)
        window.scrollTo(0, 0)
    }



    useEffect(() => {
        if (actualPage > buttonLimit[buttonLimit.length-1]) {
            setActualBtn(actualBtn + 1)
        } else if (actualPage < buttonLimit[0]) {
            setActualBtn(actualBtn - 1)
        }
    }, [increment, decrement])

    // console.log(pageNumbers);
    return (
       <>
             <nav className="pagination">
                {actualPage !== 1 &&
                <span onClick={decrement}><i className='bx bx-chevrons-left bx-sm pag-btn' ></i></span>
                }
                    
                    {
                        buttonLimit.map(number => (
                            <span style={number === actualPage ? {backgroundColor: "#d93f3f"} : {backgroundColor: "gray"}} className='page-number' onClick={() => changeActualPage(number)} key={number}>{number}</span>
                        ))
                    }
                
                {
                    actualPage !== pageNumbers[pageNumbers.length-1] &&
                    <span onClick={increment}><i className='bx bx-chevrons-right bx-sm pag-btn' ></i></span>
                }
                </nav>
       </>
    );
};

export default Pagination;
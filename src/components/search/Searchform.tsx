import React from 'react';
import styled from 'styled-components';

const Searchform:React.FC = () => {
    return (
        <SearchFormWrapper>
            <SearchFormInput>

            </SearchFormInput>
            <SearchFormButton type="submit">
                확인
            </SearchFormButton>
        </SearchFormWrapper>
    );
}

export default Searchform;

const SearchFormWrapper = styled.form`
    position:relative;
    width:100%;
    height:60px;
    margin-bottom:20px;
`

const SearchFormInput = styled.input`
    width:100%;
    height:100%;
    padding:20px;
    box-sizing:border-box;
    border-radius:20px;
    font-size:1.2rem;
    font-weight:600;
`

const SearchFormButton = styled.button`
    position:absolute;
    right:0;
    top:0;
    width:100px;
    height:100%;
    background:red;
    border-radius:20px;
    cursor:pointer;
    font-weight:bold;
`
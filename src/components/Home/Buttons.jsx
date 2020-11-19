import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeRange } from '../../redux/actions/bch'

const ButtonWrapper = styled.section`
  width: 100%;
  text-align: center;
`
// Change background colour if active 
const CustomButton = styled.button`
  background: ${(props) =>
    props.value === props.active ? 'palevioletred' : 'white'};
  color: ${(props) =>
    props.value === props.active ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`
function Buttons() {
  const btnList = [
    {
      id: 1,
      value: 1,
      title: '1 Day',
      isDefault: false,
    },
    {
      id: 2,
      value: 7,
      title: '7 Days',
      isDefault: false,
    },
    {
      id: 3,
      value: 30,
      title: '30 Days',
      isDefault: true,
    },
  ]
  const dispatch = useDispatch()

  const [activeButtonId, setActiveButtonId] = useState(btnList[2].value)

  const handleButtonClick = (event) => {
    setActiveButtonId(Number(event.target.value))
    dispatch(changeRange(event.target.value))
  }
  return (
    <ButtonWrapper>
      {btnList.map((btn) => (
        <CustomButton
          key={btn.id}
          value={btn.value}
          active={activeButtonId}
          onClick={handleButtonClick}
        >
          {btn.title}
        </CustomButton>
      ))}
    </ButtonWrapper>
  )
}

export default Buttons

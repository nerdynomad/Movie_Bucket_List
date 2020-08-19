import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo/movie.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src={logo} width="40" height="40" alt="" />
            </Wrapper>
        )
    }
}

export default Logo

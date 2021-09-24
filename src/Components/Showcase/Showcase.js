import React from 'react'
import styled from 'styled-components'
import './Showcase.css'
const ShowCase = styled.section`

`
export const Showcase = () => {
    return (
        <div className='showcase'>
            <div className='container grid'>
             <div>
                <h1>Manage your Business</h1>
                <p>The easiest way to manage your business without having problems,Fast
                The easiest way to manage your business without having problems,Fast
                </p>
                <a href='#' className='btn'>Read More</a>
             </div>
             <div className='showcase-form card'>
             <h2>Access to Administration</h2>
                <from >
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required/>
                    </div>
                    <div class="form-control">
                        <input type="password" name="password" placeholder="Password" required/>
                    </div>
                    
                    <input type="submit" value="Submit" class="btn btn-primary"/>
                </from>
             </div>
            </div>
        </div>
    )
}

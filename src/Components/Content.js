import React from 'react'
import lab1 from './images/Image 20.png'
import lab2 from './images/Image 21.png'
import lab3 from './images/Image 22.png'
import "./content.css"

const Content = ()=>{

    return(
       <div className="content">

        <h2><b>Food Lab Food Safety Services</b></h2>

        <div className='pagecontent'>
            <p>
                Aperiam quia sapiente vel consequatur consequatur omnis sed autem quae. Ipsa et minus consequatur vero et doloribus. Ex error illum consequatur amet ea occaecati odit. Quia similique dolorum officiis distinctio magnam ut facilis. Et dolore est inventore ea et molestiae earum.
            </p>
            <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="662.898" height="567.43" viewBox="0 0 662.898 567.43">
                <path id="Path_1377" data-name="Path 1377" d="M146.031,0C226.682,0,662.9,305.029,662.9,459.052s-436.217,98.715-516.868,98.715S0,432.906,0,278.883,65.38,0,146.031,0Z" fill="#519259"/>
            </svg>
            <svg className='svg2' xmlns="http://www.w3.org/2000/svg" width="662.898" height="567.43" viewBox="0 0 662.898 567.43">
                <path id="Path_1379" data-name="Path 1379" d="M146.031,0C226.682,0,662.9,305.029,662.9,459.052s-436.217,98.715-516.868,98.715S0,432.906,0,278.883,65.38,0,146.031,0Z" fill="rgba(81,146,89,0.5)"/>
            </svg>
            {/* <svg className='svg3' xmlns="http://www.w3.org/2000/svg" width="662.898" height="567.43" viewBox="0 0 662.898 567.43">
                <path id="Path_1379" data-name="Path 1379" d="M146.031,0C226.682,0,662.9,305.029,662.9,459.052s-436.217,98.715-516.868,98.715S0,432.906,0,278.883,65.38,0,146.031,0Z" fill="rgba(81,146,89,0.5)"/>
            </svg> */}
            <div className='imagecon'>
                <img className='lab1' src={lab1} alt='lab1'/>
                <img className='lab3' src={lab3} alt='lab3'/>
                <img className='lab2' src={lab2} alt='lab2'/>
            </div>
            
            
            

        </div>
       </div>
    )
}
export default Content;
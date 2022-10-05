
import arrow from '../asstes/arrow_drop_up.png';
import React, { useState } from "react";
import add from '../asstes/add.png';
import {IoMdArrowDropdown} from 'react-icons/io';
import {GoPlus} from 'react-icons/go';
import GetInvolvedStyles from "./GetInvolved.scss";


function GetInvolved() {

  const [regional, setRegional] = useState(false);
  const [special, setSpecial] = useState(false);
  const [other, setOther] = useState(false);
  return (
    <section className='body flex flex-col justify-center items-center mt-10'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='title font-bold text-blue-200'>WHY JOIN A GROUP</h1>
        <p className='w-5/6 md:w-1/2'>
          If you graduated from ALU you just know the importance of networking,
          and you have built a wonderful network during your time at ALU.
          Through ALU Alumni Association you can stay in touch with the ALU
          community, and build a lifetime network with like minded ALUmni
          members across Africa. Connect with fellow Alumni based on geography,
          shared interest, and identity, or class affiliation!Read below for
          information on Alumni-led groups supported by AAA (ALU Alumni Association),
          and find contact info for the groups that appeal to you.
        </p>
      </div>



      <div className='groups flex flex-col justify-center items-center'>
        <h1 className='title flex font-bold text-blue-200'>JOIN GROUPS</h1>,
        <div className='groups_table flex flex-col justify-left w-screen'>
          <section className='w-5/6 md:w-1/2 border-2'>
            <div className='first_row flex items-center justify-between'>
              <p className='ml-5 font-bold'>REGIONAL GROUPS</p>

              <button className="dropdown" onClick={() => setRegional(!regional)}> <IoMdArrowDropdown className='row_icon'/> </button></div>



            {regional ?
              <div className=' flex flex-col  justify-center '>
                <><p className='sub table_row flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0 '><span className='ml-5' >WEST AFRICA</span> <a href="https://www.linkedin.com/mynetwork/"><GoPlus className='row_icon plus mr-3'/> </a> </p>
                  <p className='sub table_row flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>RWANDA</span>  <a href="https://www.linkedin.com/mynetwork/"><GoPlus className='row_icon plus mr-3'/> </a> </p>
                  <p className='sub table_row flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>ZIMBABWE</span>  <a href="https://www.linkedin.com/mynetwork/"><GoPlus className='row_icon plus mr-3'/></a></p></>
              </div>
              : null}

          </section>

          <section className='w-5/6 md:w-1/2 border-2'>


            <div className=' table_row flex items-center justify-between'>
              <p className='ml-5 font-bold'>SPEACIAL INTEREST GROUPS</p>

              <button className="dropdown" onClick={() => setSpecial(!special)}> <IoMdArrowDropdown className='row_icon'/> </button></div>



            {special ?
              <div className=' flex flex-col  justify-center '>
                <><p className='sub table_row flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0 '><span className='ml-5' >BUSINESS ENTHUSIATS</span> <a href="https://www.google.com"><GoPlus className='row_icon plus mr-3'/> </a> </p>
                  <p className='sub table_row flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>GLOBAL CHALLENGES</span>  <a href="https://www.google.com"><GoPlus className='row_icon plus mr-3'/> </a> </p>
                </>
              </div>
              : null}

          </section>

          <section className='w-5/6 md:w-1/2 border-2'>


            <div className='table_row flex items-center justify-between'>
              <p className='ml-5 font-bold'>OTHER GROUPS</p>

              <button className="dropdown" onClick={() => setOther(!other)}> <IoMdArrowDropdown className='row_icon'/></button></div>



            {other ?
              <div className=' flex flex-col  justify-center '>
                <>
                  <p className='sub table_row flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>NEW GRADS</span>  <a href="https://www.linkedin.com/mynetwork/"><GoPlus className='row_icon plus mr-3'/></a></p></>
              </div>
              : null}

          </section>






        </div>
      </div>
      <button className='create bg-red-200 text-white font-semibold mt-5 h-8 w-40'>CREATE A GROUP</button>
    </section>
  );
}

export default GetInvolved;

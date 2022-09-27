
import arrow from '../asstes/arrow_drop_up.png';
import React, {useState} from "react";
import add from '../asstes/add.png';

function GetInvolved() {

    const[regional, setRegional] = useState(false);
    const[special, setSpecial] = useState(false);
    const[other, setOther] = useState(false);
  return (
    <section className='flex flex-col justify-center items-center mt-10'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='font-bold text-blue-200'>WHY JOIN A GROUP</h1>
        <p className='w-5/6 md:w-1/2'>
          If you graduated from ALU you just know the importance of networking,
          and you have built a wonderful network during your time at ALU.
          Through ALU Alumni Association you can stay in touch with the ALU
          community, and build a lifetime network with like minded ALUmni
          members across Africa.
        </p>
      </div>

      

      <div>
        <h1 className='flex items-center justify-center font-bold text-blue-200'>JOIN GROUPS</h1>,
<div className='flex flex-col justify-center items-center w-screen'>
        <section className='w-5/6 md:w-1/2 border-2'>
        

        <div className='flex items-center justify-between'>
            <h1 className='ml-5 font-bold'>REGIONAL GROUPS</h1>

            <button onClick={()=>setRegional(!regional)}> <img src={arrow} alt="" /> </button></div>

        
 
      {regional?
      <div className=' flex flex-col  justify-center '>
      <><h1 className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0 '><span className='ml-5' >WEST AFRICA</span> <a href="https://www.linkedin.com/mynetwork/"><img className='mr-3' src={add} alt="" /> </a> </h1>
      <h1 className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>RWANDA</span>  <a href="https://www.linkedin.com/mynetwork/"><img className='mr-3' src={add} alt="" /> </a> </h1>
      <h1 className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>ZIMBABWE</span>  <a href="https://www.linkedin.com/mynetwork/"><img className='mr-3' src={add} alt="" /> </a></h1></>
      </div>
      :null}

</section>

<section className='w-5/6 md:w-1/2 border-2'>
        

        <div className='flex items-center justify-between'>
            <h1 className='ml-5 font-bold'>SPEACIAL INTEREST GROUPS</h1>

            <button onClick={()=>setSpecial(!special)}> <img src={arrow} alt="" /> </button></div>

        
 
      {special?
      <div className=' flex flex-col  justify-center '>
      <><h1 className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0 '><span className='ml-5' >BUSINESS ENTHUSIATS</span> <a href="https://www.google.com"><img className='mr-3' src={add} alt="" /> </a> </h1>
      <h1 className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>GLOBAL CHALLENGES</span>  <a href="https://www.google.com"><img className='mr-3' src={add} alt="" /> </a> </h1>
</>
      </div>
      :null}

</section>

<section className='w-5/6 md:w-1/2 border-2'>
        

        <div className='flex items-center justify-between'>
            <h1 className='ml-5 font-bold'>OTHER GROUPS</h1>

            <button onClick={()=>setOther(!other)}> <img src={arrow} alt="" /> </button></div>

        
 
      {other?
      <div className=' flex flex-col  justify-center '>
      <>
      <h1 className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0'><span className='ml-5'>NEW GRADS</span>  <a href="https://www.linkedin.com/mynetwork/"><img className='mr-3' src={add} alt="" /> </a></h1></>
      </div>
      :null}

</section>






</div>
      </div>

      <button className='bg-red-200 text-white font-semibold mt-5 h-8 w-40'>CREATE A GROUP</button>
    </section>
  );
}

export default GetInvolved;

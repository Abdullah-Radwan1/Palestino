import React from 'react'
import "../../css/advantages.css"
import Image from 'next/image'
import service1 from  "../../../public/service-01.png"
import service2 from  "../../../public/service-02.png"
import service3 from  "../../../public/service-03.png"
const Advantages = () => {
  return (
    <div className='advantages'>

<div className="container ">
<h1>Did you know that <span>Palestino</span> is The Best in the West ?</h1>
<p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, aperiam corrupti consectetur blanditiis voluptates suscipit mollitia?</p>
<div className="alladv mt-5 gap-y-10">
<div className="adv"> <div className="img relative lg:w-40 lg:h-40  w-24 h-24"><Image fill src={service1} alt='img'/> </div>  <h2>quick delivery</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos.</p></div>
<div className="adv"> <div className="img relative lg:w-40 lg:h-40  w-24 h-24"><Image fill src={service2} alt='img'/> </div>  <h2>yummy food</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos.</p></div>
<div className="adv"> <div className="img relative lg:w-40 lg:h-40  w-24 h-24"><Image fill src={service3} alt='img'/> </div>  <h2>gently serviced</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos.</p></div>
<div className='adv-img'><img  src="https://www.pngwing.com/en/free-png-bzine" alt="" /></div>

</div>


</div>


    </div>
  )
}

export default Advantages
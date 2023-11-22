import React from 'react'
import "../Style/FAQs.css"

const FAQs = () => {
  return (
    <div className='faq'>
     <h1>FAQ's</h1>
     <div id="accordion">
  <div class="card border-0" className='card1'>
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-lg btn-block" className='btn12' data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          What is Paramshavak?
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      Paramshavak is a powerful supercomputer at KIET, boasting 96GB RAM, 16TB ROM, Intel Xeon Gold 6145 Processor, and Nvidia Quadro RTX. It's a cutting-edge resource for data science and deep learning enthusiasts.
      </div>
    </div>
  </div>
  <div class="card" className='card1'>
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-lg btn-block collapsed" className='btn12' data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Does it support all languages?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      Yes, Paramshavak supports a variety of programming languages, ensuring flexibility for users engaged in diverse data science and deep learning projects.
      </div>
    </div>
  </div>
  <div class="card" className='card1'>
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-lg btn-block collapsed" className='btn12' data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do I need to know code to use Paramshavak?
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
      Proficiency in coding is essential to harness the full potential of Paramshavak. It empowers users to execute complex data science and deep learning tasks effectively.
      </div>
    </div>
  </div>
  <div class="card" className='card1'>
    <div class="card-header" id="heading4">
      <h5 class="mb-0">
        <button class="btn btn-lg btn-block collapsed" className='btn12' data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
        Will I be able to embed the code into my project?
        </button>
      </h5>
    </div>
    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordion">
      <div class="card-body">
      Certainly, Paramshavak seamlessly integrates with your projects. You can embed and execute your code, leveraging the supercomputer's robust capabilities for enhanced project development.
      </div>
    </div>
  </div>
  <div class="card" className='card1'>
    <div class="card-header" id="heading5">
      <h5 class="mb-0">
        <button class="btn btn-lg btn-block collapsed" className='btn12' data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
        Can multiple team members in my organization manage my project?
        </button>
      </h5>
    </div>
    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordion">
      <div class="card-body">
      Absolutely, Paramshavak fosters collaborative project management. Multiple team members within your organization can efficiently contribute, ensuring collective success in your projects.
      </div>
    </div>
  </div>
</div>
     </div> 
     
  )
}

export default FAQs
import React from "react";
import styles from "./Price.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Box,
} from '@chakra-ui/react'
import Footer from "../Footer/Footer";
import Navbar from "../Components/Navbar";
const Pricing = () => {

    const [value , setValue] = React.useState(true);
    const [value1 ,setValue1] = React.useState(false);
    const handleClick =()=>{
      setValue(!value);
      setValue1(!value1);
    }
  return (
    <div>
      <Navbar/>
      <div className={styles.topBox}>
        <div className={styles.headBox}>
          <h1 style={{alignItems:"center", justifyContent:"center", display:"flex", fontSize:"40", fontWeight:"bold"}}>
          Matching pets with forever homes, one swipe at a </h1>
          <h1 style={{alignItems:"center", justifyContent:"center", display:"flex", fontSize:"40", fontWeight:"bold"}}>time .</h1>
        </div>
        <div className={styles.headBox}>
          <p className={styles.subheading}>
            Choose the most accurate pricing for you and start gaining crucial
            insights for your pet.
            <p style={{alignItems:"center", justifyContent:"center", display:"flex" , fontWeight:"bold"}}>
              You can also start with a free 14-day trial.
            </p>
          </p>
        </div>
      </div>
      <div >
        <div >
          <p style={{alignItems:"center", justifyContent:"center", display:"flex", fontSize:"40px", fontWeight:"bold"}}>PRICING</p>
        </div>
        <div className={styles.pricingBox_child2}>
          <p>Your time costs more</p>
        </div>
        <div className={styles.pricingBox_child3}>
          <p>
            Use free forever plan or subscribe to a paid plan to get more
            features!
          </p>
        </div>
        <div className={styles.pricingBox_child4}>
          <button onClick={handleClick} style={value?{backgroundColor:"#25cf60" , color:"white"}:{backgroundColor:"white" , color:"white"}}>Anually 10% discount</button>
          <button onClick={handleClick} style={value1?{backgroundColor:"#25cf60" , color:"white"}:{backgroundColor:"white" , color:"white"}}>Monthly</button>
        </div>
      </div>
      <div className={styles.priceListBox}>
        <div className={styles.priceDiv}>
          <div className={styles.listTop}>
            <p className={styles.type}>Free</p>
            <p>Paw-some Pals</p>
          </div>
          <hr size="2" width="100%" color="#25cf60" />
          <div className={styles.listAbout}>
            <p>Keep track of your pet on daily basis.</p>
          </div>
          <button className={styles.listBtn}>
            Join for free
          </button>
          <div className={styles.listPoints}>
            <ul>
              <li>Unlimited users</li>
              <li>Basic profile</li>
              <li> limited messages</li>
            </ul>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <div className={styles.listTop}>
            {value?<p className={styles.type1}>$5.2</p> :<p className={styles.type1}>$7</p> }
            <p>Furry Friend</p>
          </div>
          <hr size="2" width="100%" color="#25cf60" />
          <div className={styles.listAbout}>
            <p>Be more transparent and gain customers' trust</p>
          </div>
          <div className={styles.listBtn}>
            <p style={{alignItems:"center", justifyContent:"center", display:"flex"}}>Start your free trial</p>
          </div>
          <div className={styles.listPoints}>
            <ul>
              <li>More visibility</li>
              <li>enhanced media</li>
              <li>More profiles</li>
              <li>direct contact</li>
              <li>Unlimited integrations</li>
            </ul>
          </div>
        </div>
        <div className={styles.pro}>
          <div className={styles.listTop}>
            {!value1?<p className={styles.type1}>$10</p>:<p className={styles.type1}>$15</p>}
            <p>Tail Wagging Premium</p>
          </div>
          <hr size="2" width="100%" color="white" />
          <div className={styles.listAbout1}>
            <p>Get full control on your business</p>
          </div>
          <div className={styles.listBtn1}>
            <p style={{alignItems:"center", justifyContent:"center", display:"flex"}}>Start your free trial</p>
          </div>
          <div className={styles.listPoints}>
            <ul>
             
              <li>Custom user roles</li>
              <li> Featured placement</li>
              <li>unlimited media</li>
              <li>Advanced search</li>
              <li>Screenshots</li>
              
            </ul>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <div className={styles.listTop2}>
            <p style={{fontSize:"43px"}}>$20</p>
            <p>Top Dog Elite</p>
          </div>
          <hr size="2" width="100%" color="#25cf60" />
          <div className={styles.listAbout}>
            <p>Customize TimeCamp to your custom needs</p>
          </div>
          <div className={styles.listBtn}>
            <p style={{alignItems:"center", justifyContent:"center", display:"flex"}}>Contact us</p>
          </div>
          <div className={styles.listPoints1}>
            <ul> 
              <li>Top search</li>
              <li>VIP access</li>
              <li>expert matching</li>
              <li>Personalized training</li>
              <li>Self hosted </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div >
        <p style={{paddingLeft:"243px", fontSize:"25px", color:"grey"}}>
          Trusted by 18,000 teams from all over the world (and still growing!)
        </p>
      </div>
      <div className={styles.logosDiv}>
        <div className={styles.stars}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
            alt="logo"
          />
          <br />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"
            alt="logo"
          />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/dsv.png" alt="logo1" />
        </div>
        <div>
          <img src="https://cdn-m.timecamp.com/img/logos/usp.png" alt="logo1" />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/logos/saatchi.png"
            alt="logo1"
          />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"
            alt="logo1"
          />
        </div>
        <div>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"
            alt="logo"
          />
          <br />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"
            alt="logo"
          />
        </div>
      </div>
      
      <div >
        <p style={{ fontSize:"40px", fontWeight:"bold", alignItems:"center", justifyContent:"center",display:"flex"}}>What customer say</p>
        <div className={styles.reviews} style={{display:"flex", gap:"1rem", borderColor:"Black"}}>
          <div >
            <h3 className={styles.reviewshead}>Improving your records every day</h3>
            <p className={styles.reviewsContent}>
              "Being able to measure the time each task takes or each activity
              that takes place during the day, brings control to your time and
              improves your own records to grow professionally every day more."
            </p>
            <br />
            <br />
            <p className={styles.author} style={{color:"grey",fontWeight:"bold"}}>
           - Sarah Johnson
              <br />
              Caretaker
            </p>
          </div>
          <div>
            <h3 className={styles.reviewshead}>A huge asset for our remote business</h3>
            <p className={styles.reviewsContent}>
              "TimeCamp was a recent implementation for us after using a
              different time tracking system. It is a clean easy to use software
              with barely any learning curve. It has everything we need, min by
              min tracking, notes, projects, tasks, multiple reports, etc. 
            </p>
            <br />
            <br />
            <p className={styles.author} style={{color:"grey",fontWeight:"bold"}}>
              - Ria Rodriguez
              <br />
              Pet Manager
            </p>
          </div>
          <div>
            <h3 className={styles.reviewshead}>We can distribute workload in a fair basis</h3>
            <p className={styles.reviewsContent}>
              "With TimeCamp we are capable to understand exactly which part of
              the project require more time so we can find a solution and also
              the saturation of the team so we can distribute workload in a fair
              basis."
            </p>
            <br />
            <br />
            <p className={styles.author} style={{color:"grey",fontWeight:"bold"}}>
             - Emily Chen
              <br />
              Freelancer
            </p>
          </div>
        </div>
      </div>
      <div className={styles.try} style={{paddingTop:"60px"}}>
        <div>
          <h4 className={styles.trybold}>Just when you had enough . </h4>
          <p style={{fontFamily:"italic", fontSize:"25px", fontWeight:"bold"}}> Try ANIMAL</p>
        </div>
        <button className={styles.tryBtn}>Start tracking time</button>
      </div>
      <div className={styles.communities}>
        <div className={styles.commLogo}>
          <div className={styles.logos}>
           <a href="https://crozdesk.com/software/timecamp">
           <img src="https://cdn-m.timecamp.com/img/greenbranding/crozdesk.jpg" alt="logoCommunities1" /></a> 
          </div>
          <div className={styles.logos}>
            <a href="https://www.capterra.com/p/129847/TimeCamp/">
            <img src="https://cdn-m.timecamp.com/img/greenbranding/capterra.svg" alt="logoCommunities2" />
            </a>
           
          </div>
          <div className={styles.logos}>
          <a href="https://www.g2.com/products/timecamp/reviews">
          <img src="https://cdn-m.timecamp.com/img/greenbranding/g2crowd.svg" alt="logoCommunities3" />
          </a>
           
          </div>
          <div className={styles.logos}>
          <a href="https://www.getapp.com/project-management-planning-software/a/timecamp/reviews/">
          <img src="https://cdn-m.timecamp.com/img/greenbranding/getapp.svg" alt="logoCommunities4" />
          </a>
          
          </div>
        </div>
        <div className={styles.commLogo2}>
          <div className={styles.commHead}>
            <p>Loved by customers and recognized among online communities</p>
          </div>
          <div className={styles.commInt}>
            <p>While shiny and classy awards are always appreciated, it's the great feedback from our customers that makes us proud. Nothing beats knowing that we're helping improve our customer's work life.</p>
          </div>
          <div className={styles.logosItem}>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/leader-summer-reviews-signup.svg" alt="logo1" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/sourceforce.svg" alt="logo2" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/recommended.png" alt="logo3" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/easiest-to-use-icon-review-signup.svg" alt="logo4" />
            </div>
            <div>
              <img src="https://cdn-m.timecamp.com/img/greenbranding/pricing/front.png" alt="logo5" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faq}>
        <p className={styles.faqHead}>Frequently Asked Questions</p>
        <Accordion defaultIndex={[0]} allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontWeight={"600"} fontSize='xl'>
       What forms of payment do you accept?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign={"left"} >
    We accept all major credit cards - Visa, Mastercard, American Express, PayPal. We also accept wire transfers and check that cover annual payments over $2000. You'll receive an invoice for each charge made.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"600"} fontSize='xl'>
          Can I change my plans?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  textAlign={"left"}>
    You can switch plans, change the number of seats, upgrade or cancel your subscription any time you want or during the billing period, without any consequences. Additional charges will be automatically prorated. According to our policy, we do not grant any refunds.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"600"} fontSize='xl' >
      Do you offer discount ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} textAlign={"left"} >
    We offer a 10% discount when billed annually. You can also contact us for an additional discount for larger (greater than 50) volume of seats. Please contact us at sales@timecamp.com.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight={"600"}  fontSize='xl'>
         Do you offer discounts for non-profit organizations?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  textAlign={"left"}>
    We offer an additional 30% discount for non-profits, universities, students and schools. Please contact our support at help@timecamp.com with a copy of your 501(c)(3) paperwork.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  fontWeight={"600"} fontSize='xl'>
         Do you offer on-premise version of TimeCamp?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  textAlign={"left"}>
    Yes, for bigger organizations with more than 100 employees. For more information please contact us at sales@timecamp.com.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </div>


      <Footer/>
    </div>
  );
};

export default Pricing;


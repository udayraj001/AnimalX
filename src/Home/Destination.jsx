import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Popular Destination</h1>
        <p className="font-sofias tagline">
          Where adventure awaits at every turn!
        </p>
        <DestinationData
          heading="Kerala: The City of Love!"
          text="Kerala, a state on the southwestern Malabar Coast of India, is known for its unique cultural heritage, lush landscapes, and rich traditions. The state's relationship with animals is intertwined with its culture, religion, and daily life. Here are some key aspects of Kerala's animal culture:
Elephants
Cultural Significance:
Elephants play a central role in Kerala's culture and are revered in various religious and cultural ceremonies.
The state is famous for its temple festivals, where caparisoned elephants (decorated with gold-plated caparisons, bells, and umbrellas) are a major attraction."
          img1="https://i.pinimg.com/564x/21/74/82/217482c9fad0f123b70caa33aa432e47.jpg"
          img2="https://i.pinimg.com/736x/df/74/76/df747657ba5a5a928ef9dfacbeda328e.jpg"
          className="first-desc"
          button="Book Now!"
        />
        <DestinationData
          heading="Maharashtra: The City of Forts!"
          text="Maharashtra boasts rich biodiversity, featuring iconic wildlife such as Bengal tigers in Tadoba-Andhari Tiger Reserve and Indian bison in Radhanagari Wildlife Sanctuary. The state is a haven for birdwatchers, with Navegaon National Park hosting over 200 bird species. Its coastal regions, like the Konkan coast, are rich in marine life, adding to the state's natural splendor. Conservation efforts are in place to protect endangered species like the Great Indian Bustard found in the grasslands of Solapur and Ahmednagar."
          img1="https://i.pinimg.com/564x/45/7f/c7/457fc7c0b63ec2c0e75fb757000ddf43.jpg"
          img2="https://i.pinimg.com/564x/91/81/75/918175ec7789cf1581e48e3d0ac91645.jpg"
          className="first-desc-reverse"
          button="Book Now!"
        />
        <DestinationData
          heading="Rajastan: The Sunny Side of Life!"
          text="Embark on a journey to the Rajastan, where nature's wonders and luxury seamlessly intertwine. Discover a world of unparalleled beauty and serenity as you immerse yourself in the turquoise embrace of the Indian Ocean. Whether you seek romantic seclusion, thrilling water sports, or simply to unwind on sun-kissed beaches, the Rajastan offers it all. Picture yourself in overwater bungalows, where each moment is a dreamlike escape. Dive into vibrant coral gardens, explore underwater worlds, and indulge in the finest cuisine with your toes in the sand. The Rajastan beckons, promising an unforgettable experience where your every desire is met in this tropical paradise."
          img1="https://i.pinimg.com/736x/fe/d6/8d/fed68d9d89e874b59938d34b63d96980.jpg"
          img2="https://i.pinimg.com/564x/df/bd/29/dfbd29428122c543efbff3456b67a691.jpg"
          className="first-desc"
          button="Book Now!"
        />
      </div>
    </>
  );
};

export default Destination;
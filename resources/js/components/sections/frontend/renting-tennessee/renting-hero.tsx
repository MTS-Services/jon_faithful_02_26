import React from 'react';
import { FaHome, FaGavel, FaMapMarkedAlt } from 'react-icons/fa';
import { Hero } from '../hero';

const RentingSections: React.FC = () => {
    const steps = [
        {
            icon: <FaMapMarkedAlt />,
            title: "Explore Neighborhoods",
            desc: "From the bright lights of Nashville to the quiet peaks of the Smokies."
        },
        {
            icon: <FaGavel />,
            title: "Renter's Rights",
            desc: "Stay informed about Tennessee landlord-tenant laws and security deposits."
        },
        {
            icon: <FaHome />,
            title: "Find Your Home",
            desc: "Tools and resources to help you secure the best rental deals in the state."
        }
    ];

    return (
        <>
            <Hero
                slides={[
                    "/assets/images/herros/Typical-apartment-complex-building-in-suburban-area-scaled.jpeg",
                ]}
                title={
                    <>
                        Renting in Tennessee
                    </>
                }
                description={
                    <>
                        Renting in Tennessee has become increasingly popular as home prices rise nationwide. Whether you’re relocating for work, lifestyle, or affordability, Tennessee offers a wide range of rental options, from apartments and condos to single-family homes across both urban and small-town markets. <br></br>
                        <br></br>
                        This guide explains everything you need to know about renting in Tennessee, including costs, lease terms, best cities to rent in, and tips for renters moving from out of state.
                    </>
                }
            />
        </>
    );
};

export default RentingSections;
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useState, useEffect } from "react";
import React from 'react';

const PetDetail = () => {
    const [pet, setPet] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchPetDetail() {
            try {
                const petDocRef = doc(db, "pets", id); // Get the document reference
                const petDoc = await getDoc(petDocRef); // Fetch the document

                if (petDoc.exists()) {
                    setPet(petDoc.data()); // Set the pet data to state
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching pet detail: ", error);
            }
        }
        if (id) {
            fetchPetDetail();
        }
    }, [id]);

    if (!pet) {
        return <div>Loading...</div>; // Show a loading state while fetching the data
    }

    return (
        <main >
            <section>
                <h1 className="mt-20 mb-5 text-4xl text-center font-bold text-black">{pet.name}</h1>
                <p className="mb-5 text-lg text-center text-gray-900 text-black">{pet.description}</p>
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xl my-3">
                        <img className="rounded" src={pet.imageUrl} alt={pet.name} />
                    </div>
                    <div className="max-w-xl my-3">
                        <p className="text-3xl font-bold text-gray-900 text-black">
                            <span className="mr-1">$</span>
                            <span className="">{pet.price}</span>
                        </p>

                        <p className="my-4 select-none">
                            <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>
                            <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{pet.temperament.join(', ')}</span>
                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{pet.size}</span>
                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{pet.breed}</span>
                        </p>
                        <p className="my-3">
                            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                            </button>
                        </p>
                        <p className="text-lg text-gray-900 text-black">
                            {pet.description}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PetDetail;

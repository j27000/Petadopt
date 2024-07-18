import React from 'react'
import { PetCard } from "../../components/Elements/PetCard"
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import { useState, useEffect } from "react";

export const OthersList = () => {
    const [Pets, setPets] = useState([]);

    useEffect(() => {
        async function Others() {
            const q = query(collection(db, "pets"), where("type", "==", "bird"));
            const q1 = query(collection(db, "pets"), where("type", "==", "rabbit"));
            const pets = await getDocs(q);
            const pets1 = await getDocs(q1);

            const birdPets = pets.docs.map((doc) => ({ id: doc.id, ...doc.data() })); 
            const rabbitPets = pets1.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            setPets([...birdPets, ...rabbitPets]);
        }
        Others();
    }, []);

  return (
    <main>
      <section className="my-4">
        <div className="my-5 flex justify-between items-center">
          <span className="text-2xl font-semibold text-black">
            All Pets {Pets.length}
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row gap-5">
          {Pets.map((pet) => (
            <div className="flex flex-wrap justify-center lg:flex-row gap-4" key={pet.id}>
              <PetCard pet={pet} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};




// export const OthersList = () => {
//     const [Pets, setPets] = useState([]);

//     useEffect(() => {
//         async function Others() {
//             const q = query(collection(db, "pets"), where("type", "==", "bird"));
//             const q1 = query(collection(db, "pets"), where("type", "==", "rabbit"));
//             const pets = await getDocs(q);
//             const pets1 = await getDocs(q1);

//             const birdPets = pets.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//             const rabbitPets = pets1.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//             setPets([...birdPets, ...rabbitPets]);
//         }
//         Others();
//     }, []);
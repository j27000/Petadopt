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
      <section className="mt-20">
        <div className="my-5 flex justify-between items-center">
          <span className="text-2xl font-semibold text-black">
            Birds and Rabbits {Pets.length}
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
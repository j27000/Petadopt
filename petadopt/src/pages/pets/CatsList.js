import React from 'react'
import { PetCard } from "../../components/Elements/PetCard"
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import { useState, useEffect } from "react";

export const CatsList = () => {
  const [Pets, setPets] = useState([]);

  useEffect(() => {
    async function Cats() {
      const q = query(collection(db, "pets"), where("type", "==", "cat"));
      const pets = await getDocs(q);
      setPets(pets.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    Cats();
  }, []);

  return (
    <main>
      <section className="mt-20">
        <div className="my-5 flex justify-between items-center">
          <span className="text-2xl font-semibold text-black">
            Cats {Pets.length}
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

import { PetCard } from "../../components/Elements/PetCard";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import { useState, useEffect } from "react";

export const ExploreList = () => {
  const [Pets, setPets] = useState([]);

  useEffect(() => {
    async function Explore() {
      const q = query(collection(db, "pets"));
      const pets = await getDocs(q);
      setPets(pets.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); // Ensure each pet has an id
    }
    Explore();
  }, []);

  return (
    <main>
      <section className="mt-20">
        <div className="my-5 flex justify-between items-center">
          <span className="text-2xl font-semibold text-black">
            All Pets {Pets.length}
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

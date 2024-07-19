
import { Link } from "react-router-dom"
import { useCart } from "../../../Context/Contextpet";

export const CartCard = ({ pet }) => {
    const { removeFromCart } = useCart();
    function handleclick(pet) {
        removeFromCart(pet)

    }

    return (
        <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
            <div className="flex">
                <Link >
                    <img className="w-32 rounded" src={pet.imageUrl} alt={pet.name} />
                </Link>
                <div >
                    <Link >
                        <p className="text-lg ml-2 dark:text-slate-200">{pet.name}</p>
                    </Link>
                    <button onClick={handleclick(pet)} className="text-base ml-2 text-red-400">Remove</button>
                </div>
            </div>
            <div className="text-lg m-2 dark:text-slate-200">
                <span>{pet.description}</span>
            </div>
        </div>
    )
}

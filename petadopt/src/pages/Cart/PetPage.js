import { useCart } from "../../Context/Contextpet"
import { CartEmpty } from "./components/CartEmpty"
import { List } from "./components/List"

export const PetPage = () => {

    const { petList } = useCart();
    let Cartlength = 1;
    if (petList.length === 0) {
        Cartlength = 0;
    }
    return (
        <main>
            {Cartlength ? <List /> : <CartEmpty />}


        </main>
    )
}

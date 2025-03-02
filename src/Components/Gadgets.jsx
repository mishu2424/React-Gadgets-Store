import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import LoadingSpinner from "./LoadingSpinner";

const Gadgets = () => {
    const gadgets = useLoaderData();
    const navigation=useNavigation();
    console.log(navigation)
    // console.log(gadgets);
    const params=useParams();
    console.log(params);
    if (navigation.state === 'loading') return <LoadingSpinner></LoadingSpinner>
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {
                gadgets.map(gadget=><Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;
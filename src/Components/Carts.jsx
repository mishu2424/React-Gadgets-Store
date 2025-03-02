import { useEffect, useState } from "react";
import { getStoredCart, removeItem } from "../utility/localStorage";
import { useLoaderData, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { PiSlidersBold } from "react-icons/pi";
import Modal from 'react-modal';
import { MdOutlineCancel } from "react-icons/md";
Modal.setAppElement('#root');
const Carts = () => {
  const [items, setItems] = useState([]);
  const [sortText, setSortText] = useState('');
  const [sum, setSum] = useState(0);
  const gadgets = useLoaderData();
  const navigate = useNavigate();


  // Steps to add react modal ->
  // install react-modal using ->npm install --save react-modal
  // import this -> import Modal from 'react-modal';
  // then add this->Modal.setAppElement('#root'); <- here root means the main root div that is in the index.html file.
  // Add these afterwards->
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // Then see how it is used ->
  // <button onClick={openModal}>Open Modal</button>
  //     <Modal
  //       isOpen={modalIsOpen}
  //       onRequestClose={closeModal}
  //       style={customStyles}
  //       contentLabel="Example Modal"
  //     >
  //       <button onClick={closeModal}>close</button>
  //       <div>I am a modal</div>
  //     </Modal>



  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSum(0);
    setItems([]);
    removeDataFromCarts();
    navigate('/')
  }
//   console.log(gadgets, items);
  useEffect(() => {
    const getLists = getStoredCart("cartList");
    const newData = [];
    getLists.forEach((id) => {
      const foundItem = gadgets.find((gadget) => gadget.product_id === id);
      newData.push(foundItem);
    });
    setItems(newData);
  }, []);

  const handleSort=(sortType, items)=>{
    let sortedItems=[];
    setSortText(sortType)
    if(sortType==="Price"){
        console.log(sortType);
        sortedItems=items.sort((a,b)=>{
            return b.price -a.price;
        })
    }else{
        console.log(sortText)
        sortedItems=items.sort((a,b)=>{
            return b.rating -a.rating;
        })
    }
    console.log(sortedItems);
    // setItems(items);
  }

  const handleRemoveFromCartList = (id,list) => {
    const remainingData = items.filter((item) => item.product_id !== id);
    setItems(remainingData);
    removeItem(id, list);
  };

  const removeDataFromCarts=()=>{
    localStorage.removeItem('cartList');
  }
  useEffect(()=>{
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    setSum(totalPrice);
  },[items])

  return (
    <div id="mainContainer" className="w-[90vw] mx-auto space-y-3 mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Cart</h3>
        <div className="flex items-center gap-10">
          <h4 className="text-base font-bold">Total Price: {sum}</h4>
          <div>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 border border-[#9538E2] text-[#9538E2]">
              {`${sortText ? `Sort By ${sortText}`:'Sort'}`} <PiSlidersBold></PiSlidersBold>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={()=>{
                handleSort('Price',items);
                }}>
                <a>Price</a>
              </li>
              <li onClick={()=>{
                handleSort('Rating', items);
                }}>
                <a>Rating</a>
              </li>
            </ul>
          </div>
          <button onClick={openModal} className="btn rounded-full bg-[#9538E2] text-white">Purchase</button>
          <Modal
          className={`w-[400px] h-96 absolute left-[32%] top-[20%] bg-white rounded-lg p-2`}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><MdOutlineCancel className="rounded-full text-red-500 cursor-pointer" size={24}></MdOutlineCancel></button>
        <div className="w-fit mx-auto">
          <img src="/icons8-success.svg" className="w-20" alt="success-icon" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="font-bold">Payment Successful</h2>
          <hr className="text-gray-200"/>
          <p className="text-xs">Thanks for purchasing</p>
          <p>Total: ${sum}</p>
          <button onClick={closeModal} className="btn w-full rounded-full bg-red-500 text-white hover:text-red-500 hover:bg-white duration-150">Close</button>
        </div>
      </Modal>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((cart) => (
          <Cart
            key={cart.product_id}
            cart={cart}
            handleRemoveFromCartList={handleRemoveFromCartList}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;

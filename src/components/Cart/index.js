"use client";
import { CheckIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeItem, updateQuantity } from "@/redux/Features/cart/cartSlice";
import { useRef, useState } from "react";

const Cart = (props) => {
  const quantityRef = useRef();
  const [toggleEditQuantity, setToggleEditQuantity] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setOpen(false);
    setToggleEditQuantity(false);
  };

  const detailsHandler = (id) => {
    router.push(`/item/${id}`);
    props.setOpen(false);
  };

  const removeItemHandler = (id) => {
    dispatch(removeItem({ id: id }));
    if (cartItems.length == 1) {
      props.setOpen(false);
    }
  };

  const confirmQuantityChangeHandler = (id, newQuantity) => {
    dispatch(updateQuantity({ id: id, quantity: newQuantity }));
    setToggleEditQuantity(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center"
    >
      <div className="w-1/2 bg-white outline-none rounded-lg font-Montserrat ">
        <div className="w-full p-4 text-2xl font-semibold border-b border-black shadow">
          Your Cart Items
        </div>
        <div className="w-full p-4 max-h-[450px] overflow-scroll">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full border-b flex pb-2 mt-2 relative"
            >
              <Image
                width={200}
                height={200}
                src={item.image}
                alt=" "
                className="w-36 h-36 rounded-md mr-2"
              />
              <div className="mr-4 relative">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="">{item.customiztions}</div>
                <div className="flex items-center">
                  {toggleEditQuantity && quantityRef.current.id == cartItems[index].id && (
                    <>
                      <input
                        ref={quantityRef}
                        id={item.id}
                        min={1}
                        defaultValue={item.quantity}
                        type="number"
                        className="mr-1 w-16 py-1 px-2 rounded-md border border-black focus:outline-none"
                      />
                      <button
                        onClick={() =>
                          confirmQuantityChangeHandler(
                            item.id,
                            quantityRef.current.value
                          )
                        }
                        className="rounded-full bg-green-200 hover:bg-green-300 w-[18px] h-[18px] flex items-center justify-center p-1"
                      >
                        <CheckIcon width={12} height={12} />
                      </button>
                    </>
                  )}
                  {!toggleEditQuantity && (
                    <>
                      <div className="mr-2">Quantity: {item.quantity}</div>
                      <button
                        onClick={() => setToggleEditQuantity(true)}
                        className="rounded-full bg-gray-100 hover:bg-gray-200 w-[18px] h-[18px] flex items-center justify-center p-1"
                      >
                        <PencilIcon width={12} height={12} />
                      </button>
                    </>
                  )}
                </div>
                <div className="flex bottom-2 left-2 absolute">
                  <button
                    onClick={() => removeItemHandler(item.id)}
                    className="rounded-full border-2 bg-red-100 hover:bg-red-200 font-medium border-red-500 text-red-700 px-2 py-1 mr-4"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => detailsHandler(item.id)}
                    className="rounded-full border-2 bg-gray-50 hover:bg-gray-200 font-medium border-gray-500 text-gray-700 px-2 py-1"
                  >
                    Details
                  </button>
                </div>
              </div>

              <div className="absolute right-0 top-0 grid grid-cols-1 place-items-end">
                <div className="text-lg font-semibold -mb-1">{`USD ${
                  item.price * item.quantity
                }`}</div>
                <div className="text-sm text-gray-400">{`(USD ${item.price} each)`}</div>
                <div className="text-sm mt-4">Shipping: USD 12</div>
                <hr className="bg-gray-400 border-0 h-[1px] w-full mt-2" />
                <div className="text-sm mt-4 font-semibold">Total: USD 122</div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length != 0 && (
          <div className="w-full flex flex-row-reverse py-4 pr-4 shadow">
            <button className="px-4 py-1 rounded-full text-blue-700 font-medium bg-blue-200 hover:bg-blue-400 border-2 border-blue-500">
              Pay
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};
export default Cart;

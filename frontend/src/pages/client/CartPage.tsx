import BreadCrumb from "@/components/BreadCrumb";
import { IRootState } from "@/store";
import { fetOneProductAction, fetchProductAction } from "@/store/product/Action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
interface ICart {
  productID: string
  productName: string
  image: string
  quantity: number
  price: number
}
const CartPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [count, setCount] = useState<number>(1);
  const productState = useSelector((state: IRootState) => state.products)
  const orderState = useSelector((state: IRootState) => state.orders)
  const [carts, setCarts] = useState<ICart[]>([])
  console.log(orderState);

  const handleCartInfo = () => {
    const cartTemp: ICart[] = []
    for (const order of orderState.orders) {
      const product = productState?.products?.find((product) => product._id == order.productID)
      if (product) {
        cartTemp.push({
          productID: product?._id,
          productName: product?.name,
          image: order.image,
          quantity: order.quantity,
          price: order.price
        })
        localStorage.setItem("cartItems", JSON.stringify(cartTemp))
      }
    }
    setCarts(cartTemp)
  }
  // useEffect(() => {
  //   const storeCart = JSON.parse(localStorage.getItem("cartItems")!)
  //   console.log(storeCart);

  //   if (storeCart) {
  //     setCarts(storeCart)
  //   }
  // }, [])
  useEffect(() => {
    const updateCartInfoAndSetCarts = async () => {
      await handleCartInfo();
      const storeCart = JSON.parse(localStorage.getItem("cartItems")!);
      if (storeCart) {
        setCarts(storeCart);
      }
    }
    updateCartInfoAndSetCarts();
  }, [orderState])
  const handleDec = (index: number) => {
    setCarts(prevCarts => {
      const updateCarts = [...prevCarts];
      if (updateCarts[index].quantity > 1) {
        updateCarts[index].quantity -= 1;
      }
      return updateCarts;
    });
  }
  const handleIncre = (index: number) => {
    const updateCarts = [...carts]
    console.log(updateCarts[index].quantity);

    if (updateCarts[index].quantity >= 1) {
      updateCarts[index].quantity += 1
      setCarts(updateCarts)
    }
  }
  return (
    <div className="container">
      <BreadCrumb></BreadCrumb>
      <h1 className="font-bold uppercase mt-11 text-lg">Giỏ hàng của bạn</h1>
      {carts?.map((cart, index) => {
        return <form>
          <Link to={`/productDetail/${cart.productID}`}>
            <div className="p-[35px] border-b-[1px] flex justify-between items-center border-gray-200">
              <img src={cart.image} className="w-[98px] h-[98px]" />
              <div>
                <h2 className="mb-2 font-bold text-lg">{cart.productName}</h2>
                <p className="text-primary font-bold">{cart.price}</p>
              </div>
              <div className="border border-gray-200 flex items-center gap-8 py-4 px-3">
                <button
                  type="button"
                  className="rounded-full font-bold bg-gray-500 text-white w-4 h-4"
                  onChange={() => handleDec(index)}
                  disabled={cart.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  className="text-center w-5"
                  onChange={(e) => setCount(Number(e.target.value))}
                  value={cart.quantity}
                  defaultValue={1}
                />
                <button
                  type="button"
                  className="rounded-full font-bold bg-gray-500 text-white w-4 h-4"
                  onClick={() => handleIncre(index)}
                >
                  +
                </button>
              </div>
              <div>
                <p className="text-primary font-bold">40.000₫</p>
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </Link>
        </form>
      })}
      <div className="mt-[30px] mb-8 w-[470px] ml-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-bold text-lg">Tổng tiền</h2>
          <p className="text-primary font-bold">80.000₫</p>
        </div>
        <div className="flex items-center justify-between">
          <Link
            to=""
            className="bg-primary rounded-full text-white flex items-center border gap-1 py-3 px-5 font-bold hover:text-primary hover:bg-white hover:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Tiếp tục mua hàng
          </Link>
          <Link
            to=""
            className="bg-primary rounded-full text-white flex items-center border gap-1 py-3 px-5 font-bold hover:text-primary hover:bg-white hover:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default CartPage;

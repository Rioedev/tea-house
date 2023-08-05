import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container-2">
      <form className="flex gap-[28px]">
        <div className="">
          <Link
            to="/"
            className="text-3xl block text-primary font-semibold mb-5 mt-5"
          >
            Tea House
          </Link>
          <div className="flex gap-[28px]">
            <div>
              <div className="flex items-center gap-32 mb-3">
                <h3 className="text-lg font-bold">Thông tin nhận hàng</h3>
                <Link to="" className="text-primary font-semibold">
                  Đăng nhập
                </Link>
              </div>
              <div>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Họ và tên"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Địa chỉ"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                    placeholder="Ghi chú ..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold">Vận chuyển</h3>
                </div>
                <div>
                  <div className="flex w-[350px] justify-between mb-3 bg-gray-50 border border-gray-300 text-gray-900 p-3 text-sm rounded-lg focus:ring-primary focus:border-primary">
                    <div className="flex gap-3 items-center">
                      <input
                        type="radio"
                        className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-full focus:ring-primary focus:border-primary block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        required
                      />
                      Giao hàng tận nơi
                    </div>
                    <span>40.000₫</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <h3 className="text-lg font-bold">Thanh toán</h3>
                </div>
                <div>
                  <div className="flex w-[350px] justify-between mb-3 bg-gray-50 border border-gray-300 text-gray-900 p-3 text-sm rounded-lg focus:ring-primary focus:border-primary">
                    <div className="flex gap-3 items-center">
                      <input
                        type="radio"
                        className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-full focus:ring-primary focus:border-primary block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        required
                      />
                      Thanh toán khi giao hàng (COD)
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-[1px] py-5 pl-5 w-[410px]">
          <h1 className="text-xl font-bold mb-5">Đơn hàng (4 sản phẩm)</h1>
          <div className="pt-7 border-t-[1px] border-b-[1px] pb-2">
            <div className="mb-4 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="border rounded-lg relative w-[55px] h-[55px]">
                  <img src="./6.png" className="w-[50px] h-[50px] rounded-lg" />
                  <p className="w-5 h-5 bg-primary absolute top-[-5px] right-[-5px] flex justify-center items-center text-sm text-white font-semibold rounded-full">
                    1
                  </p>
                </div>
                <h3 className="font-bold">Trà Phúc bồn tử</h3>
              </div>
              <p className="font-medium">40.000₫</p>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="border rounded-lg relative w-[55px] h-[55px]">
                  <img src="./6.png" className="w-[50px] h-[50px] rounded-lg" />
                  <p className="w-5 h-5 bg-primary absolute top-[-5px] right-[-5px] flex justify-center items-center text-sm text-white font-semibold rounded-full">
                    1
                  </p>
                </div>
                <h3 className="font-bold">Trà Phúc bồn tử</h3>
              </div>
              <p className="font-medium">40.000₫</p>
            </div>
          </div>
          <div className="py-5 flex gap-3 border-b-[1px]">
            <input
              type="text"
              className="p-3 border rounded-lg w-full"
              placeholder="Nhập mã giảm giá"
            />
            <button className="p-3 rounded-lg bg-primary text-white font-medium min-w-[102px]">
              Áp dụng
            </button>
          </div>
          <div className="pt-7 pb-5 border-b-[1px]">
            <div className="flex justify-between mb-4">
              <span>Tạm tính:</span>
              <span className="font-medium">145.000₫</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển:</span>
              <span className="font-medium">40.000₫</span>
            </div>
          </div>
          <div className="flex justify-between mb-4 items-center pt-5">
            <span className="text-lg font-semibold">Tổng cộng:</span>
            <span className="text-primary text-2xl font-bold">185.000₫</span>
          </div>
          <div className="flex justify-between">
            <Link
              to="/cart"
              className="text-primary font-medium text-sm flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span>Quay về giỏ hàng</span>
            </Link>
            <button className="text-white uppercase bg-primary p-4 rounded-lg min-w-[120px]">
              Đặt hàng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

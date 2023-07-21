import { useEffect } from "react"

const ProductDetail = () => {

    return (
        <div className="max-w-[1275px] mx-auto">
            <ul className="py-[15px] flex gap-2">
                <li>Trang chủ</li>
                <li>Giỏ hàng</li>
            </ul>
            <div className="flex py-[28px]">
                <div className="flex flex-col">
                    <div className="overflow-hidden max-w-[500px]">
                        <img className="w-full border border-1px-[#ccc]" src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/6.jpg?v=1608878870957" alt="" />
                        <div className="flex flex-start gap-4 mt-4 w-full overflow-hidden">
                            <img className="border border-1px-[#ccc] w-[84px]" src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/6.jpg?v=1608878870957" alt="" />
                            <img className="border border-1px-[#ccc] w-[84px]" src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/6.jpg?v=1608878870957" alt="" />
                            <img className="border border-1px-[#ccc] w-[84px]" src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/6.jpg?v=1608878870957" alt="" />
                            <img className="border border-1px-[#ccc] w-[84px]" src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/6.jpg?v=1608878870957" alt="" />
                        </div>
                    </div>
                </div>
                <form className="pl-[50px]">
                    <h1 className="font-semibold text-[24px] uppercase">Trà Phúc bồn tử</h1>
                    <div className="py-2">
                        <i>Mô tả đang cập nhật</i>
                        <p className="text-[16px]">Giá: <span className="text-[24px] text-[#4d8a54] font-bold pl-2">40.000<sup>đ</sup></span></p>
                        <div className="mt-[15px] flex">
                            <p className="mr-[15px]">Số lượng:</p>
                            <div className="flex items-center">
                                <button id="decrementBtn" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l">-</button>
                                <span id="quantityValue" className="px-3 py-1 bg-white border-t border-b border-gray-200">1</span>
                                <button id="incrementBtn" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r">+</button>
                            </div>
                        </div>
                        <div className="flex mt-[25px] pb-[20px] border-b-2 border-b-1-[#ccc]">
                            <button className="min-w-[250px] px-[22px] py-3 mr-[20px] border border-1 border-[#4d8a54] text-[#4d8a54] rounded-[40px] text-[18px] hover:bg-[#4d8a54] hover:text-[#fff] transition-all ease-linear flex items-center justify-center bg-[#F3FFF4] font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                Thêm vào giỏ hàng</button>
                            <button className="px-[22px] min-w-[250px] py-3 mr-[20px] border border-1 border-[#4d8a54] text-[#fff] rounded-[40px] text-[18px] flex items-center justify-center bg-[#4d8a54] font-bold hover:bg-[#427248] transition-all ease-linear">Mua ngay</button>
                        </div>
                        <div className="flex flex-col pt-[15px] text-[18px]">
                            <p><strong className="text-[#282828]">Giao hàng miễn phí:</strong><span className="ml-2">Áp dụng đơn hàng {'>'} 200.000đ</span></p>
                            <p className="mt-2"><strong className="text-[#282828]">Thanh toán tận nhà:</strong><span className="ml-2">Nhanh chóng và an toàn</span></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetail
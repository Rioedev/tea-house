import BreadCrumb from "@/components/BreadCrumb";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="mb-10">
        <BreadCrumb></BreadCrumb>
        <form className="text-center mt-[80px]">
          <div className="heading">
            <h1 className="text-[26px] mb-[25px]">Đăng kí</h1>
            <p className="mb-5">
              Đã có tài khoản,{" "}
              <Link to="" className="hover:text-primary">
                đăng nhập tại đây
              </Link>
            </p>
          </div>
          <div className="mb-[18px]">
            <div className="mb-[18px]">
              <input
                type="text"
                placeholder="Họ tên"
                className="w-[330px] border border-gray-200 px-4 py-3"
              />
            </div>
            <div className="mb-[18px]">
              <input
                type="email"
                placeholder="Email"
                className="w-[330px] border border-gray-200 px-4 py-3"
              />
            </div>
            <div className="mb-[18px]">
              <input
                type="number"
                placeholder="Số điện thoại"
                className="w-[330px] border border-gray-200 px-4 py-3"
              />
            </div>
            <div className="mb-[18px]">
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-[330px] border border-gray-200 px-4 py-3"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[330px] bg-primary text-white py-3 mb-4"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

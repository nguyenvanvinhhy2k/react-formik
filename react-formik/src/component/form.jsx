import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập")
        .min(4, "Tên phải trên 4 kí tự"),
      email: Yup.string()
        .required("Vui lòng nhập")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng định dạng email"
        ),
      phone: Yup.string()
        .required("Vui lòng nhập")
        .matches(
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          "Số điện thoại phải nhập 9 chữ số"
        ),
      password: Yup.string()
        .required("Vui lòng nhập")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Mật khẩu tối thiểu 8 kí tự và ít nhất 1 chữ cái và 1 chữ số"
        ),
      confirmPassword: Yup.string()
        .required("Vui lòng nhập")
        .oneOf(
          [Yup.ref("password"), null],
          "Mật khẩu không giống mật khẩu nhập "
        ),
    }),
    onSubmit: (values) => {
      alert("Submit thành công");
    },
  });

  return (
    <div className="main">
      <form className="form" id="form-1" onSubmit={formik.handleSubmit}>
        <h3 className="heading"> Đăng ký</h3>
        <div className="spacer" />
        <div className="form-group">
          <label htmlFor="fullname" className="form-label">
            Họ tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="VD: Vinh Nguyễn"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.name && (
            <p className="form-message" style={{ color: "red" }}>
              {formik.errors.name}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.email && (
            <p className="form-message" style={{ color: "red" }}>
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            SĐT
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="VD: 0868085632"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.phone && (
            <p className="form-message" style={{ color: "red" }}>
              {formik.errors.phone}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Nhập mật khẩu"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.password && (
            <p className="form-message" style={{ color: "red" }}>
              {formik.errors.password}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation" className="form-label">
            Nhập lại mật khẩu
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            type="text"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.confirmPassword && (
            <p className="form-message" style={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>
        <button type="submit" className="form-submit">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Form;

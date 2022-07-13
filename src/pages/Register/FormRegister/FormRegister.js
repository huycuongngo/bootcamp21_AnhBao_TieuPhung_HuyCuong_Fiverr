import React from 'react'
import { Form, Input, message } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import { BaseService } from '../../../services/baseService';

import "./FormRegister.scss"

export default function FormRegister() {
  let navigate = useNavigate();
  let userSignup = new BaseService(); 
  let regexPhoneVietNam = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  let regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  let regexName = /^[^\d]+$/;
  let regexAccount = /^[a-z0-9_-]{6,10}$/;

  const onFinish = (values) => {
    console.log('Success:', values);
    userSignup
      .post("api/auth/signup", values)
      .then((res) => {
        console.log(res);
        message.success("Đăng ký thành công");

        setTimeout(() => {
          navigate("/login")
          //return();
        }, 2000)
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng ký thất bại");
      });

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form py-14 px-5'>
      <h1 className='text-4xl mb-8'>Đăng Ký</h1>
      <Form
        layout='vertical'
        name="basic"

        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="name"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Tài khoản không được rỗng!',
            },
            () => ({
              validator(_, value) {
                if (regexAccount.test(value)) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Tài khoản từ 6-10 ký tự và số!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Mật khẩu không được rỗng!',
            },
            () => ({
              validator(_, value) {
                if (regexPassword.test(value)) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Hãy nhập lại mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Mật khẩu nhập lại không chính xác!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[
            {
              required: true,
              message: 'Họ tên không được rỗng!',
            },
            () => ({
              validator(_, value) {
                if (regexName.test(value)) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Tên chỉ được chứa ký tự'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Email không được rỗng!',
            },
            // {
            //   type: 'email',
            //   message: 'Email không hợp lệ',
            // }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Số điện thoại không được rỗng!',
            },
            () => ({
              validator(_, value) {
                if (regexPhoneVietNam.test(value)) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Số điện thoại không hợp lệ!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <div className='flex justify-between'>
            <button className='rounded-lg px-12 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Ký</button>
            <NavLink to="/login">
              <button className='rounded-lg px-7 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Nhập --&gt;</button>
            </NavLink>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

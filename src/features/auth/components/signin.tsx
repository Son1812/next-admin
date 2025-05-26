'use client'
import Signin from "@/components/Auth/Signin";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Form, Input, Button, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Sign in",
// };

export default function SignIn() {
  const [form] = Form.useForm();

  const onFinish = (values: { username: string; password: string }) => {
    // login(values, {
    //   onSuccess: () => {
    //     router.push('/dashboard');
    //   },
    // });
  };

  return (
    <>
      {/* <Breadcrumb pageName="Log In" /> */}

      <div className="max-w-[500px] rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card" style={{boxShadow:'0px 4px 8px 4px #c7c7c7'}}>
        <div className=" flex flex-wrap items-center">
          <div className="w-full ">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <div className="mb-10 flex items-center justify-center">
                <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
                <div className="block w-full min-w-fit bg-white px-3 text-center text-2xl font-medium dark:bg-gray-dark">
                  Đăng Nhập
                </div>
                <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
              </div>

              <div>
                <Form form={form} name="login" size="large" onFinish={onFinish} layout="vertical">
                  <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </div>

              <div className="mt-6 text-center">
                <p>
                  Don’t have any account?{" "}
                  <Link href="/auth/sign-up" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign in to your account
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please sign in to your account by completing the necessary
                fields below
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "@/app/layout";
import { login_url } from "@/api/global-urls";

// const page = () => {
//   const { status } = useSession();
//   if (status === "loading") {
//     return "Loading or not authenticated...";
//   }

//   return <div>Signed on</div>;
// };

// export async function postData(url: string = "", data: {} = {}): Promise<any> {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

type FormValues = {
  email: string;
  password: string;
  keepSigned?: boolean;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("We are onSubmit!");
    console.log(data);

    // const res = await postData(`${login_url}`, {
    //   email: data.email,
    //   password: data.password,
    // });
    const res = await fetch(`${login_url}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    console.log("This is the res of postData:",res.json());
    res.json()
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="form-block">
            <form className="form" onSubmit={handleSubmit(onSubmit as any)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Please write a valid email
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      type="checkbox"
                      id="check-signed-in"
                      {...register("keepSigned", { required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                {/* <a
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  Forgot password?
                </a> */}
              </div>

              {/* <div className="form__btns">
                <button type="button" className="btn-social fb-btn">
                  <i className="icon-facebook"></i>Facebook
                </button>
                <button type="button" className="btn-social google-btn">
                  <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
                </button>
              </div> */}

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Sign in
              </button>

              <p className="form__signup-link">
                Not a member yet? <a href="/signup">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default LoginPage;

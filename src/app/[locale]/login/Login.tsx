import { useTranslations } from "next-intl";
import "./Login.css";
import React, { ReactNode } from "react";

interface LoginProps {
  children: ReactNode;
}
export default function Login({ children }: LoginProps) {
  const t = useTranslations("Login");
  return (
    <div className="login-form py-16">
      <div className="form-container lg:min-h-auto mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl lg:flex-row">
        <div className="image block w-1/2 bg-cover"></div>
        <div className="flex h-full w-full flex-col p-8 lg:w-1/2">
          <h2 className="text-center text-2xl font-semibold text-gray-700">
            {t("Sign In")}
          </h2>
          <p className="mt-10 text-center text-xl text-gray-600">
            {t(
              "To continue, sign in using your university-issued Microsoft account",
            )}
          </p>
          <a
            href="/api/login/microsoft"
            className="mt-auto flex items-center rounded-lg text-white shadow-md hover:bg-gray-100 lg:mt-4"
          >
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path
                  fill="#ff5722"
                  d="M6 6H22V22H6z"
                  transform="rotate(-180 14 14)"
                ></path>
                <path
                  fill="#4caf50"
                  d="M26 6H42V22H26z"
                  transform="rotate(-180 34 14)"
                ></path>
                <path
                  fill="#ffc107"
                  d="M26 26H42V42H26z"
                  transform="rotate(-180 34 34)"
                ></path>
                <path
                  fill="#03a9f4"
                  d="M6 26H22V42H6z"
                  transform="rotate(-180 14 34)"
                ></path>
              </svg>
            </div>
            <h1 className="w-5/6 px-4 py-3 text-center font-bold text-gray-600">
              {t("Sign in with Microsoft")}
            </h1>
          </a>

          {children}
        </div>
      </div>
    </div>
  );
}

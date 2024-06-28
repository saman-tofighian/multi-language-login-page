import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <section className="py-[10px] px-[20px] rounded-[10px] min-w-[500px] shadow-lg">
      <form className="flex flex-col gap-[5px]">
        <h2 className="text-center font-extrabold mb-8">{t("login")}</h2>
        <div className="w-full flex gap-[5px] justify-between">
          <label htmlFor="userName">{t("userName")}</label>
          <input type="text" id="userName" className="border w-2/3  py-2" />
        </div>
        <div className="w-full flex gap-[5px] justify-between">
          <label htmlFor="Password">{t("PassWord")}</label>
          <input type="text" className="border w-2/3 py-2" id="Password" />
        </div>
        <div className="w-full flex gap-[5px] justify-between flex-wrap">
          <button className="border-none bg-blue-500 rounded-[5px] text-white mt-8 w-full cursor-pointer">
            {t("signIn")}
          </button>
          <a href="/">{t("forgetPassword")}</a>
        </div>
      </form>
    </section>
  );
}

export default Login;

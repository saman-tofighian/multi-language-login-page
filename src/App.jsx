import { useState } from "react";
import { useTranslation } from "react-i18next";
import Login from "./Login";

function App() {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState("en");

  const onChangeLocale = (e) => {
    const { value } = e.target;
    setLocale(value);
    i18n.changeLanguage(value.toLowerCase());
  };

  return (
    <main dir={i18n.dir()}>
      <header className="w-full bg-blue-400 py-3 px-5">
        <select value={locale} onChange={onChangeLocale}>
          <option value="en">English</option>
          <option value="fa">Persian</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
          <option value="ch">Chinese</option>
        </select>
      </header>
      <aside className="flex justify-center items-center mt-[50px]">
        <Login />
      </aside>
    </main>
  );
}

export default App;

import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";

export function Layout() {
  return (
    <>
      <MainMenu />
      <Logo />
      <CurrencySelector />
      <IconMenu />
      <Footer />
    </>
  );
}

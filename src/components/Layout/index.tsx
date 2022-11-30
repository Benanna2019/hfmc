import HarvestHeader from "../Header";
import HarvestFooter from "../Footer";
import AltHarvestHeader from "../AltHeader";

export const HarvestLayout = ({ children }: any) => {
  return (
    <>
      <AltHarvestHeader />
      {children}
      <HarvestFooter />
    </>
  );
};

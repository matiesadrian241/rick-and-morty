//import { Outlet } from "react-router-dom";
import { PageWrapper } from "./Layout.style";
const withLayout =
  (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) =>
    (
      <PageWrapper>
        <Component {...props} />
        {/* <Outlet /> */}
      </PageWrapper>
    );

export default withLayout;

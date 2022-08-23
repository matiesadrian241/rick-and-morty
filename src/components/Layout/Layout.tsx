import { PageWrapper } from "./Layout.style";

const withLayout =
  (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) =>
    (
      <PageWrapper>
        <Component {...props} />
      </PageWrapper>
    );

export default withLayout;

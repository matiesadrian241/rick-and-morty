import { PageWrapper } from "./Layout.style";

/**
 *  Higher order component used to render both Characters and Character Profile page and have the same background image
 */
const withLayout =
  (Component: React.ComponentType) => (props: JSX.IntrinsicAttributes) =>
    (
      <PageWrapper>
        <Component {...props} />
      </PageWrapper>
    );

export default withLayout;

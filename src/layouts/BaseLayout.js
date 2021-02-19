import Header from '../components/Header';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;

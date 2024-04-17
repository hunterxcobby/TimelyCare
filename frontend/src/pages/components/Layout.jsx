import Navbar from "./Navbar";

const Layout = ({ children, isLoggedIn }) => {
    return (
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <main>{children}</main>
        {/* Other layout components */}
      </div>
    );
  };
  
  export default Layout;
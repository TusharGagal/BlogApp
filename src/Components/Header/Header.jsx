import { LogoutBtn, Logo, Container } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => {
    state.auth.Status;
  });
  const navigate = useNavigate();
  const NavItems = [
    { name: "Home", slug: "/", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "SignUp", slug: "/signup", active: !authStatus },
    { name: "AllPosts", slug: "/all-posts", active: authStatus },
    { name: "AddPosts", slug: "/add-posts", active: authStatus },
  ];
  return (
    <div className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {NavItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Header;

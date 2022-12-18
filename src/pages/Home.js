import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
      <div>follow this link to sign in with your phone</div>
      <Link to="phonesignup">link</Link>
      </div>
    </>
  );
}

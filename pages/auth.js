import FirebaseAuth from "../components/auth/FirebaseAuth";

const Auth = () => {
  return (
    <div>
      <div>
        <FirebaseAuth />
        <p>
          <a href="/">Go Home Now</a>
        </p>
      </div>
    </div>
  );
};

export default Auth;

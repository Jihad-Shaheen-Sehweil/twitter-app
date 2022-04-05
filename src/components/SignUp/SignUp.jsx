import { BsTwitter } from "react-icons/bs";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import "./SignUp.css";

function SignUp() {
    return (
        <main className="signUp">
            {/* log */}
            <div className="signUp_background">
                <BsTwitter className="signUp_birdIcon" />
            </div>

            <div className="signUp_detailes">
                <BsTwitter className="signUp_icon" />
                <h1 className="signUp_text_1">Happining now</h1>
                <h2 className="signUp_text_2">Join Twitter Now</h2>

                <SignUpModal />
                <SignInModal />
            </div>
        </main>
    );
}

export default SignUp;

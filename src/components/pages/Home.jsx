import Collection from "../layouts/Collection";
import Days7 from "../layouts/Days7";
import Hero from "../layouts/Hero";
import Imazing from "../layouts/Imazing";
import SignUp from "../layouts/SignUp";


const Home = () => {
    return (
        <>
            <Hero />
            <Imazing />
            <Days7 />
            <Collection />
            <SignUp />
        </>
    );
};

export default Home;
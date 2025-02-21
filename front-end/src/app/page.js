import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Home = async () => {
    const session = await getServerSession(authOptions);

    const Header = lazy(() => import('./components/Header'));
    const About = lazy(() => import('./components/About'));
    const Footer = lazy(() => import('./components/Footer'));
    const Review = lazy(() => import('./components/Review'));
    const Team = lazy(() => import('./components/Team'));
    const Contact = lazy(() => import('./components/Contact'));
    const BLog = lazy(() => import('./components/BLog'));
    const CentalProcess = lazy(() => import('./components/CentalProcess'));
    const Cars = lazy(() => import('./components/Cars'));
    const Feature = lazy(() => import('./components/Feature'));
    const StatsSection = lazy(() => import('./components/StatsSection'));
    const MainHeader = lazy(() => import('./components/MainHeader'));
    const Features = lazy(() => import('./components/Features'));




    return (
        <>
            <Suspense fallback={<Loading />}>
                <Header />
                <MainHeader />
                <Features />
                <About />
                <StatsSection />
                <Feature />
                <Cars />
                <CentalProcess />
                <BLog />
                <Contact />
                <Team />
                <Review />
                <Footer />
            </Suspense>
        </>
    );
}
export default Home;

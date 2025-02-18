import Header from '@/app/admin/_components/Header';
import Navbar from '@/app/admin/_components/Navbar';
import FormEditData from './_components/FormEditData';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';


const Page = async ({ params }) => {
    const { postId } = params
    const session = await getServerSession(authOptions);

    // Check User
    if (!session) return redirect('/');

    return (
        <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
            <div className="flex items-start">
                <Navbar />
                <section className="main-content w-full px-8">
                    <Header />
                    {/*  */}
                    <div className="my-10 px-2">
                        <div className="h-full">
                            <FormEditData ID={postId} />
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;

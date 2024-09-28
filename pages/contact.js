import Layout from '../components/Layout';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <Layout>
        <div className="m-2 flex items-center justify-center h-full p-4">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-1 w-full">
                <div className='place-content-center text-4xl p-2'>
                    <h1 className='text-4xl font-bold pb-2'>Contact Us</h1>
                    <h2 className='italic text-2xl'>Ready To Combine The Latest Tech & Your Immense Hospitality? Reach out to us to make this a reality, partnering to build a website which highlights why your customers love you.</h2></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 w-full text-center">
                    <Link href="" target='_blank' className="bg-white shadow-xl rounded-xl p-6 text-center justify-center hover:text-white hover:bg-navyGreen">
                        <p className='text-xl font-bold'>Email</p>
                        <FontAwesomeIcon icon={faEnvelope} size="4x" className='bg-sageGreen shadow-md rounded-full p-3 m-2'/>
                        <p>Please email us to let us know if you'd love to form a partnership, book a consoluation, or to set up some time to discuss our services and mission. </p>
                    </Link>
                    <Link href="https://calendly.com/madison-landlocket/30min" target='_blank' className="bg-white shadow-xl rounded-lg p-6 text-center justify-center justify-center hover:text-white hover:bg-navyGreen">
                    <p className='text-xl font-bold'>Schedule a Meeting With Calandly</p>
                    <div className='flex justify-center items-center'>
                        <Image src="/images/calandly.png" alt="Calandly Logo" className='justify-center m-2' width={100} height={100}/>
                    </div>
                    <p>Use this link to schedule a 30 minute consoluation, monthly website update review, or just to chat about your services.</p>
                    </Link>
                </div>
            </div>  
        </div>
    </Layout>
  );
};

export default Contact;

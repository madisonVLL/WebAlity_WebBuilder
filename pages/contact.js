import Layout from '../components/Layout';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <Layout>
        <div className="m-2 flex items-center justify-center h-full">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-1 w-full">
                <div><h1 className='font-bold text-3xl'>Ready To Combine The Latest Tech & Your Immense Hospitality?</h1><br></br><h2>Reach out to us to make this a reality, partnering to build a website which highlights why your customers love you.</h2></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 w-full text-center">
                    <Link href="" target='_blank' className="bg-white shadow-lg rounded-lg p-6 text-center justify-center">
                        <p className='text-xl font-bold'>Email</p>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#15310B", width: "100"}} className='justify-center' />
                        <p>Please email us to let us know if you'd love to form a partnership, book a consoluation, or to set up some time to discuss our services and mission. </p>
                    </Link>
                    <Link href="https://calendly.com/madison-landlocket/30min" target='_blank' className="bg-white shadow-lg rounded-lg p-6 text-center justify-center">
                    <p className='text-xl font-bold'>Schedule a Meeting With Calandly</p>
                    <Image src="/images/calandly.png" alt="Calandly Logo" className='justify-center' width={100} height={100}/>
                    <p>Use this link to schedule a 30 minute consoluation, monthly website update review, or just to chat about your services.</p>
                    </Link>
                </div>
            </div>  
        </div>
    </Layout>
  );
};

export default Contact;

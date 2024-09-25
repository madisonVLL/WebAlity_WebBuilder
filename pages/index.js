import Layout from '../components/Layout';
import Link from 'next/link';


const Home = () => {
  return (
    <Layout>
    <div className="max-w-7xl mx-auto p-4">
        <h1 className='text-5xl text-lime-900'><i>Welcome To</i> <span className='coolGrade'> WebAlity</span></h1>
        <br></br>
        <p>At WebAlity, we specialize in developing responsive, professional, and creative websites that prioritize what matters most for your restaurant, hotel, or travel service—your customers. We ensure that every element, from mouth-watering photos and videos of your delicious offerings to the thoughtful, heartfelt reviews from satisfied patrons, is prominently featured in your website&apos;s design. Our expertise lies in seamlessly integrating social media and online reviews, allowing potential customers to easily see the praise your business has received. We believe that the warmth of exceptional hospitality can be conveyed through a well-crafted, customer-focused website. Discover more about how we can elevate your online presence at WebAlity.</p>
        <div className="py-2 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                <Link href="/portfolio">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                    <p>
                        Learn more about our mission, values, and the story behind our business.
                    </p>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Services</h2>
                    <p>
                        View our opening hours and stay updated on our availability throughout the week.
                    </p>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        See what our customers have to say about their experience with us.
                    </p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default Home;

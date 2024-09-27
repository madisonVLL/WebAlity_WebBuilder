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
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:text-white hover:bg-navyGreen">
                    <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                    <p>
                    From websites showcasing hospitality and culinary expertise to AI-powered technologies WebAlity is here to help. Get inspired by viewing our portfolio to see how your online dreams can become a reality.
                    </p>
                    </div>
                </Link>
                <Link href="/services">
                    <div className= "bg-white shadow-lg rounded-lg p-6 text-center hover:text-white hover:bg-navyGreen">
                    <h2 className="text-xl font-semibold mb-4">Services</h2>
                    <p>
                    Whether you're launching your restaurant's first website or refreshing your online presence, WebAlity helps showcase your best self to new and returning customers. Focus on serving your guests while we handle the digital side.</p>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className= "bg-white shadow-lg rounded-lg p-6 text-center hover:text-white hover:bg-navyGreen">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>
                    Ready to bring your website to life? Reach out, and together we’ll craft a website that not only looks great but seamlessly connects all the latest web features to keep your business ahead of the curve.
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

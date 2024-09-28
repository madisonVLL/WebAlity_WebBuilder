import Layout from '../components/Layout';

const serviceFeatures = [{title: "Website Building", description: "Build responsive, professional, and up to date websites within a two-week period. This will help establish your online presence on google and other search engines, driving traffic from social media and word of mouth to further explore your hospitality-related business.", price: "1000 flat fee"}, 
    {title: "Monthly Website Editing", description: "Regular website updates, including new technologies, menu changes, hours, and other business-related adjustments, will keep your site current with the information your customers need. We provide monthly check-ins with one of our web designers, though immediate requests can be made any time for a small additional fee", price: "200/month"}, 
    {title: "Website Hosting", description: "From managing the domain to ensuring the site's always online, our website hosting services ensure that customers will always be able to access your website.", price: "30/year"}]

const Service = ({service}) => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:text-white hover:bg-navyGreen h-full flex flex-col space-y-*">
            <div>
                <h2 className='text-2xl font-bold'>{service.title}</h2>
            </div>
            <div>
                <p>{service.description}</p>
            </div>
            <div className='content-center'>
                <h2 className='bg-navyGreen shadow-md rounded-md p-1 m-2 text-white'>${service.price}</h2>
            </div>
        </div>
    )

}

const Services = () => {
    var items = []
    for (var each in serviceFeatures) {
        items.push(
            <Service service={serviceFeatures[each]} />
        )
    }
  return (
    <Layout>
        <div className='p-4'>
            <div className='mb-2 p-2'>
                <h1 className='text-4xl font-black'>Services</h1>
                <p className='text-2xl italic'>Explore the services WebAlity offers to craft the perfect website, ensuring your customers stay informed, engaged, and inspired, highlighting the positive experiences they have with your brand both on and offline.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {items.map((category) => <span>{category}</span>)}
            </div>
        </div>
    </Layout>
  );
};

export default Services;

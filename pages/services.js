import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <ul className="mt-4 space-y-4">
          <li className="text-lg">Service 1: Description</li>
          <li className="text-lg">Service 2: Description</li>
          <li className="text-lg">Service 3: Description</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Services;

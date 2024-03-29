import { Helmet } from "react-helmet-async"

const Meta = ({ title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="desciption" content={description} />
        <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
    title: 'Welcome to ProShop',
    description: 'We sell best products for cheap',
    keywords: 'electronics, buy electronics',
};

export default Meta
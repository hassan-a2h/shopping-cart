import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar leftItems={['Home']} rightItems={['About']}/>
      <BodySection />
      <CategoryList categories={['Shoes', 'Furniture', 'Devices', 'Clothing',
        'Sheets', 'Children']} />
    </div>    
  );
};

const BodySection = () => {
  return (
    <>
      <h1>Welcome to landing page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate provident 
        voluptas officia consequatur asperiores blanditiis aspernatur sunt voluptates, 
        eos accusamus laudantium distinctio quasi accusantium doloremque soluta. Quo 
        magnam, quod quos molestiae deleniti nesciunt omnis et doloribus perferendis 
        aliquam quaerat iure sint officiis amet nisi, debitis velit recusandae dolore 
        unde maxime.
      </p>
      <a href="">Shop</a>
    </>
  );
};

const CategoryList = ( { categories } ) => {
  return (
    <div>
      { categories.map((category, index) => 
        <a href="#" key={index}>{category}</a>) }
    </div>
  );
};

export default LandingPage;
const Navbar = ( { leftItems, rightItems } ) => {
  return (
    <nav>
      <ul>
        {leftItems.map((item, index) => 
        <li key={index}>{item}</li>)}

        {rightItems.map((item, index) => 
        <li key={index}>{item}</li>)}
      </ul>
    </nav>
  );
};

export default Navbar;

// Structure
//***************************************************
//***************************************************
// Usual way:
class Example extends React.component{

}

Example.propTypes = {

};
...

// Function component way:
const Example = (props) => {
  // ummm ??????
}


// Example
//***************************************************
//***************************************************
const Example = (props) => {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: PropTypes.string.isRequired
};

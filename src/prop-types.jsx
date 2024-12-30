import PropTypes from "prop-types"

const App = () => {
  return (
   <>
    <Text text1="Hello World" />
    <Text text2="This is h2"/>
   </>
  )
}

const Text = ({text1, text2}) => {
  return (
    <>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl font-bold underline">{text1}</h1>
          <h2 className="text-4xl font-semibold underline">{text2}</h2>
        </div>
    </>
  )
}

Text.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
export default App
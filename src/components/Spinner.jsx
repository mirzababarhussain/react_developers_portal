import { ClipLoader } from "react-spinners"

const Spinner = ({ loading }) => {

    const overrider = {
        margin: '100px auto',
        display: 'block'
    }
  return (
    <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={overrider}
        size={200}
    />
  )
}

export default Spinner

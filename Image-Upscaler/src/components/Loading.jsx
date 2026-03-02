import { TailSpin } from 'react-loader-spinner'


const Loading = () => {
  return (
   <TailSpin
  height="80"
  width="80"
  radius="9"
  color="#ffafcc"
  ariaLabel="three-dots-loading"
  wrapperStyle={{ margin: '20px' }}
  wrapperClass="custom-loader"
  visible={true}
/>
  )
}

export default Loading
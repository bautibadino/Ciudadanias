const Alerta = ({alerta}) => {
    return (
      <div className={
          `${alerta.error ? 'from-red-300 to-red-500' : 'from-green-300 to-green-500'} bg-gradient-to-r text-center p-3 font-semibold uppercase mt-8 text-white mb-10 rounded-md`
      }>
          {alerta.msg}
      </div>
    )
  }
  
  export default Alerta
import Button from "./Compornents/Button";

const SmartButtons = ({buttons}: {buttons: string[]}) => {
  
  return (
    <>
      {
        buttons.map((value, index) => {
          return <Button displayValue={value} key={index}/>
        })
      }
    </>
    
  )
}

export default SmartButtons;
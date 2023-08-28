import Button from "./Components/Button"

export default function SmartControlButtons({buttons}: {buttons: string[]}) {
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
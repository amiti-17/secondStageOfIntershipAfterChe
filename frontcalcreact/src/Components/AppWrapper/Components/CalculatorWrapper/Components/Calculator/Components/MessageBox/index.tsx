import style from "./style.module.css"

export default function MessageBox({message}: {message: string}) {
  return (
    <div className={style.message}>
      {message}
    </div>
  )
}
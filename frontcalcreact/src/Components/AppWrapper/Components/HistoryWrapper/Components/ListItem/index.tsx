import StorageType from "@/config/system/Types/StorageType";
import style from "./style.module.css";

export default function ListItem({currentData}:{currentData: StorageType}) {
  // console.log(currentData)
  return (
    <li className={style.expSpan}>
      <div className={style.expression} >{currentData.expression}</div>
      <div className={style.calcExp} >{currentData.calcExp}</div>
    </li>
  )
}
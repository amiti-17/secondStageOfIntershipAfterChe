import Calculator from "./Components/Calculator";
import styles from "./style.module.css"
 
export default function CalculatorWrapper() {


  return (
  <div className={styles.calculatorWrapper}>
    <Calculator />
  </div>
  )
      
}
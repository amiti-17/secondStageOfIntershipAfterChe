import style from "./style.module.css";

export default function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.loaderCircle} />
    </div>
  )
}

// const loader = new DivBoxElement(cssConstants.loader);
// loader.element.id = cssConstants.loader;
// const loaderCircle = new DivBoxElement(cssConstants.loaderCircle);
// loader.element.appendChild(loaderCircle.element);
// console.log(uiConstants);
// document.body.append(loader.element)
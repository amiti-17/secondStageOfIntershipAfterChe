interface regExpType {
  [prop: string]: RegExp;
}

const regExp: regExpType = {
  forbiddenKeys: /Alt|Tab|F\d+|Control|Shift|CapsLock|Delete|Arrow\.*|Meta/, // Control|Shift|CapsLock|Delete
}

export default regExp;

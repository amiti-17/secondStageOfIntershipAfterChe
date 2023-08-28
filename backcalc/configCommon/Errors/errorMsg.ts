interface ErrorMsgType {
    [key: string]: string;
}

const errorMsg: ErrorMsgType = {
    noPairRoundBrackets: "No open or closing round Brackets",
    strangeNumbers: "Wrong format for numbers",
    changeValueInConfig: "Don`t change value in config",
    wrongExtendedUsage: "Missing open round brackets after extended operand",
    expIsUndefined: "expression in some place evaluate as undefined",
    missingZeroBeforeDot: "spot numbers like [^\\d]\\.\\d",
    noElementFieldHere:
        "Here no element, don`t touch it, probably u use this on null",
    unknownError: "was thrown unknown error from code above",
    currentMatchIsNull: "current match is Null",
    currentValueIsUndefined: "current match is Undefined",
    validationError: "Occurs validation error. ",
    unknownServerError: "unknown server error",
    database: "one of querry to database was fallen",
};

export default errorMsg;

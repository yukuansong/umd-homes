import { useEffect, useState } from "react"

export const usePasswordValidation = (firstPassword = "", secondPassword = "") => {
    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect( () => {
        setValidLength(firstPassword.length >= 8?true: false);
    }, [firstPassword, secondPassword]);

    return [validLength, hasNumber, upperCase, lowerCase, specialChar, match];
}
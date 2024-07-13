// validation script here
const inputs = document.querySelectorAll("input")

const patterns = {
    // telephone regex
    telephone: /^\d{11}$/,
    // username regex
    username: /^[a-z\d]{5,12}$/i,
    //password regex
    password: /^[\w@-]{8,20}0$/i,
    // slug regex 
    slug: /^[a-z\d-]{8,20}$/,
    //email rgex
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// validation function
function validate(field, regex) {
    // to check validation
    // console.log(regex.test(field.value))
    if (regex.test(field.value)) {
        field.className = "valid"
    } else {
        field.className = "invalid"
    }
}
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})

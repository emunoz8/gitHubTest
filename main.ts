function buildName (firstName: string, lastName: string) {
    return "" + firstName + " " + lastName
}
let fullName = buildName("Edwin", "Munoz")
game.splash(fullName)

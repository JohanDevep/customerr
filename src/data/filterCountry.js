const data = require('./country.json')
const states = require('./states.json')
export function filterCountry(countryName,city){
    let country = data.filter((country)=>{
        if (country?.name === countryName) {
            let {id,name,iso3} = country?.states
            return {id,name,iso3}
        }
    })
    return country
}
export function filterStateCity(stateName){
    let stateData = {}
    data.filter((country)=>{
       country.states.filter((state)=>{
            if (state?.name === stateName) {
               stateData = state
            }
        })
    })
     return stateData
}
export function getStates(){
     return states
}
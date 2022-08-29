/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const carsFarmMachinery = {
    carBrand: 'Cherokee',
    price: 50000,
    isAvailableForSale: false,
}
const carsRace = {
    carBrand: 'McLaren',
    price: 100000,
    isAvailableForSale: true,
}
const carsMunicipalVehicles = {
    carBrand: 'UAZ',
    price: 8000,
    isAvailableForSale: true,
}

const arrayObjectCars = [carsRace, carsMunicipalVehicles, carsFarmMachinery]

const carsOffRoad = {
    carBrand: 'Belarus',
    price: 1000,
    isAvailableForSale: false,
}

arrayObjectCars.push(carsOffRoad)

console.log(arrayObjectCars)
console.log(arrayObjectCars[2].price)
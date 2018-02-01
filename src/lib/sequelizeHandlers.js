// Default handlers utilize sequelize
import sequelize from 'sequelize'

export async function createSequelizeListingHandler (Model) {
  return listingOptions => {
    const listOfModels = Model.findAll(listingOptions)
    return listOfModels
  }
}

export async function createSequelizeCreateHandler (Model) {
  return modelProperties => {
    const newModel = await Model.create(modelProperties)
    return newModel
  }
}

export async function createSequelizeRemoveHandler (Model) {

}

export async function createSequelizeUpdateHandler (Model) {

}


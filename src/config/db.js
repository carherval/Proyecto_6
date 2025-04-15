/* Funcionalidades para la configuración de la Base de Datos */

const { validation } = require('../../src/utils/validations/validation')

// Realiza la conexión con la Base de Datos "videogames"
const connectToDataBase = async () => {
  // Permite cargar variables de entorno desde un archivo ".env"
  require('dotenv').config()
  const dbUrl = process.env.DB_URL
  const dbName = dbUrl.substring(dbUrl.lastIndexOf('/') + 1, dbUrl.indexOf('?'))

  try {
    console.log(`Conectándose con la Base de Datos "${dbName}"...`)

    await require('mongoose').connect(dbUrl)

    console.log(
      `Conexión con la Base de Datos "${dbName}" realizada correctamente`
    )
  } catch (error) {
    console.log(
      `Se ha producido un error al conectar con la Base de Datos "${dbName}":${validation.CONSOLE_LINE_BREAK}${error}`
    )
  }
}

module.exports = { connectToDataBase }

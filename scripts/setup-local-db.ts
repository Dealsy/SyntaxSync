import { exec } from 'child_process'
import util from 'util'

const execAsync = util.promisify(exec)

async function setupLocalDB() {
  try {
    // Create database if it doesn't exist
    await execAsync('createdb syntax-sync || true')

    // Run migrations
    console.log('Setting up local database...')

    // Add any additional setup steps here

    console.log('Local database setup complete!')
  } catch (error) {
    console.error('Error setting up local database:', error)
  }
}

setupLocalDB()

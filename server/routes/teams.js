import express from 'express'
import path from 'path'
import NBATeams from '../data/teams.js';
import { fileURLToPath } from 'url'

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`dirname ${__dirname}`)
console.log(`filename: ${__filename}`)


router.get('/', (req, res) => {
    res.status(200).json(NBATeams)
})

// router.get("/:teamID", (req, res) =>{
//     res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
// })

export default router;
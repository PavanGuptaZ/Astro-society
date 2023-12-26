import bcrypt from 'bcrypt';
import UserModal from '../models/userModal.js'

const getAllAstrologers = async (req, res) => {
    try {
        const userList = await UserModal.find({})
        res.status(200).json({ list: userList })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 'error', message: "Some Thing wrong on Server" })
    }
}

const editAstrologers = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)

        if (req.user._id.toString() !== id.toString()) {
            return res.status(401).send({ status: 'error', message: "your are Unauthorized, You are not User" })
        }

        const { name, email, gender, status, languages, specialties } = req.body
        if (!name || !email || !gender || !status || !languages || !specialties) {
            return res.status(400).json({ message: "all Fields are Required" })
        }

        const isExist = await UserModal.findOne({ email: email.toLowerCase() }).lean()
        if (!isExist) {
            return res.status(409).send({ status: 'error', message: email + " is not Register" })
        }


        const updatedUser = await UserModal.findOneAndUpdate(
            { email: email.toLowerCase() },
            { $set: { name, gender, status, languages, specialties } },
            { new: true })

        res.json({ user: updatedUser })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: 'error', message: "Some Thing wrong on Server" })
    }
}


export { getAllAstrologers, editAstrologers }
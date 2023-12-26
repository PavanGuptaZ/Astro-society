import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'prefer not to say'],
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'Astrologer', 'user'],
        default: 'Astrologer'
    },
    languages: {
        type: [String],
        enum: ['assamese', 'bangla', 'bodo', 'dogri', 'english', 'gujarati', 'hindi', 'kashmiri', 'kannada', 'konkani', 'maithili', 'malayalam', 'manipuri', 'marathi', 'nepali', 'oriya', 'punjabi', 'tamil', 'telugu', 'santali', 'sindhi', 'urdu'],
        required: true
    },
    specialties: {
        type: [String],
        enum: ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH', 'NINTH', 'TENTH'],
        required: true
    },
    status: {
        type: String,
        enum: ['online', 'offline', 'busy', 'dnd', 'idel', 'working'],
        default: 'online'
    },
}, { timestamps: true })


const userModal = new mongoose.model('User', userSchema)


export default userModal
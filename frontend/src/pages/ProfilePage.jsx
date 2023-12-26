import { useDispatch, useSelector } from "react-redux";
import { currentUser, setUser } from "../features/authSlice";
import { Button, FormControl, FormHelperText, Stack, Typography } from "@mui/material";
import { SpecialtiesInput } from "../components/inputs/SpecialtiesInput";
import { LanguagesInput } from "../components/inputs/LanguagesInput";
import { useState } from "react";
import { NameInput } from "../components/inputs/NameInput";
import { GenderInput } from "../components/inputs/GenderInput";
import { emailPattern, namePattern } from "../utils/regex";
import { StatusInput } from "../components/inputs/StatusInput";
import { EmailInput } from "../components/inputs/EmailInput";
import { useUpdateAstrologerMutation } from "../features/authApiSlice";


export const ProfilePage = () => {
    const user = useSelector(currentUser)

    const [inputValues, setInputValues] = useState({
        name: user.name,
        email: user.email,
        gender: user.gender,
        status: user.status,
        password1: "",
        password2: "",
        languages: user.languages,
        specialties: user.specialties
    })

    const [updateFN] = useUpdateAstrologerMutation()
    const dispatch = useDispatch()


    let nameCheck = namePattern.test(inputValues.name);
    let EmailCheck01 = emailPattern.test(inputValues.email);
    let LanguageCheck = inputValues.languages.length > 0;
    let SpecialtiesCheck = inputValues.specialties.length > 0;

    const handleResult = async (responce) => {
        try {
            if (responce.data) {
                dispatch(setUser(responce.data.user))
            } else {
                console.log(responce.error.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async () => {

        if (nameCheck && EmailCheck01 && LanguageCheck && SpecialtiesCheck && !!inputValues.gender && !!inputValues.status) {
            const responce = await updateFN({ ...inputValues, password: inputValues.password1, _id: user._id })
            handleResult(responce)
        } else {
            return
        }
    }

    return (
        <Stack width={'100%'} height={'100%'} overflow={'auto'} p={2} mt={'70px'}>
            <Stack width={350} height={'auto'} mx={'auto'} my={'auto'} gap={2} p={2} borderRadius={1} border={'1px solid gray'} alignItems={'center'}>
                <Typography variant='h4' textAlign={'center'}>PROFILE PAGE</Typography>

                <FormControl fullWidth>
                    <NameInput inputValues={inputValues} setInputValues={setInputValues} />
                    {!nameCheck && <FormHelperText error id="name-helper-text">one or two words, no extra spacing & between 5 to 30 characters only.</FormHelperText>}
                </FormControl>

                <FormControl>
                    <StatusInput inputValues={inputValues} setInputValues={setInputValues} />
                    {!inputValues.gender && <FormHelperText error id="gender-helper-text">Gender required.</FormHelperText>}
                </FormControl>

                <FormControl fullWidth>
                    <EmailInput inputValues={inputValues} setInputValues={setInputValues} type={"old"} />
                    {!EmailCheck01 && <FormHelperText error id="email-helper-text">min of 3 and a max of 40 characters @ total 50.</FormHelperText>}
                </FormControl>

                <FormControl>
                    <GenderInput inputValues={inputValues} setInputValues={setInputValues} />
                    {!inputValues.gender && <FormHelperText error id="gender-helper-text">Gender required.</FormHelperText>}
                </FormControl>

                <LanguagesInput LanguageCheck={LanguageCheck} inputValues={inputValues} setInputValues={setInputValues} type={"old"} />

                <SpecialtiesInput SpecialtiesCheck={SpecialtiesCheck} inputValues={inputValues} setInputValues={setInputValues} type={"old"} />
                <Button variant='contained' onClick={handleSubmit} >Update</Button>
            </Stack>
        </Stack>
    )
}

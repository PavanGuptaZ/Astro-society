import PropTypes from 'prop-types';
import { Button, FormControl, FormHelperText, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { LanguagesInput } from '../components/inputs/LanguagesInput';
import { SpecialtiesInput } from '../components/inputs/SpecialtiesInput';
import { useRegisterAstrologerMutation, useLoginAstrologerMutation } from '../features/authApiSlice';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { NameInput } from '../components/inputs/NameInput';
import { GenderInput } from '../components/inputs/GenderInput';
import { EmailInput } from '../components/inputs/EmailInput';
import { PasswordInput } from '../components/inputs/PasswordInput';
import { PasswordInput2 } from '../components/inputs/PasswordInput2';
import { emailPattern, namePattern, passwordPattern } from '../utils/regex';

export const LoginAndRegisterPage = ({ type }) => {
  const [inputValues, setInputValues] = useState({ name: "", email: "", gender: null, password1: "", password2: "", languages: [], specialties: [] })
  const [uiUpdates, setUiUpdates] = useState({ password1: true, password2: true, checks: false })

  const [RegisterFN] = useRegisterAstrologerMutation()
  const [LoginFN] = useLoginAstrologerMutation()
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setUiUpdates((pre) => ({ ...pre, checks: false }))
  }, [location.pathname])

  let nameCheck = namePattern.test(inputValues.name);
  let EmailCheck01 = emailPattern.test(inputValues.email);
  let PasswordCheck01 = passwordPattern.test(inputValues.password1)
  let PasswordCheck02 = inputValues.password1 === inputValues.password2 && inputValues.password2.length > 3;
  let LanguageCheck = inputValues.languages.length > 0;
  let SpecialtiesCheck = inputValues.specialties.length > 0;


  const handleResult = async (responce) => {
    try {
      if (responce.data) {
        dispatch(setUser(responce.data.user))
        navigator('/')
      } else {
        console.log(responce.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    setUiUpdates((pre) => ({ ...pre, checks: true }))
    if (type === 'register') {

      if (nameCheck && EmailCheck01 && PasswordCheck01 && PasswordCheck02 && LanguageCheck && SpecialtiesCheck && !!inputValues.gender) {
        const responce = await RegisterFN({ ...inputValues, password: inputValues.password1 })
        handleResult(responce)
      } else {
        return
      }

    } else if (type === 'login') {
      if (EmailCheck01 && PasswordCheck01) {
        const responce = await LoginFN({ email: inputValues.email, password: inputValues.password1 })
        handleResult(responce)
      } else {
        return
      }
    }
  }

  return (
    <Stack width={'100%'} height={'100%'} overflow={'auto'} p={2} mt={'70px'}>

      <Stack width={350} height={'auto'} mx={'auto'} my={'auto'} gap={2} p={2} borderRadius={1} border={'1px solid gray'} alignItems={'center'}>
        <Typography variant='h4' textAlign={'center'}>{type.toUpperCase()}</Typography>

        {type === 'register' &&
          <>
            <FormControl fullWidth>
              <NameInput inputValues={inputValues} setInputValues={setInputValues} />
              {uiUpdates.checks && !nameCheck &&
                <FormHelperText error id="name-helper-text">one or two words, no extra spacing & between 5 to 30 characters only.</FormHelperText>}
            </FormControl>

            <FormControl>
              <GenderInput inputValues={inputValues} setInputValues={setInputValues} />
              {uiUpdates.checks && !inputValues.gender &&
                <FormHelperText error id="gender-helper-text">Gender required.</FormHelperText>}
            </FormControl>
          </>
        }

        <FormControl fullWidth>
          <EmailInput inputValues={inputValues} setInputValues={setInputValues} />
          {uiUpdates.checks && !EmailCheck01 &&
            <FormHelperText error id="email-helper-text">min of 3 and a max of 40 characters @ total 50.</FormHelperText>}
        </FormControl>

        <FormControl fullWidth>
          <PasswordInput inputValues={inputValues} setInputValues={setInputValues} uiUpdates={uiUpdates} setUiUpdates={setUiUpdates} />
          {uiUpdates.checks && !PasswordCheck01 &&
            <FormHelperText error id="password1-helper-text">no Spacing, atleast contain one captial, small letter, number and one from @, &, *, #, $, !, ? and limit of 3 to 20.</FormHelperText>}
        </FormControl>

        {type === 'register' &&
          <>
            <FormControl fullWidth>
              <PasswordInput2 inputValues={inputValues} setInputValues={setInputValues} uiUpdates={uiUpdates} setUiUpdates={setUiUpdates} />
              {uiUpdates.checks && !PasswordCheck02 &&
                <FormHelperText error id="password2-helper-text">Both the Password should be same.</FormHelperText>}
            </FormControl>


            <LanguagesInput uiUpdates={uiUpdates} LanguageCheck={LanguageCheck} inputValues={inputValues} setInputValues={setInputValues} />

            <SpecialtiesInput uiUpdates={uiUpdates} SpecialtiesCheck={SpecialtiesCheck} inputValues={inputValues} setInputValues={setInputValues} />
          </>
        }
        <Button variant='contained' onClick={handleSubmit}>{type}</Button>
      </Stack>
    </Stack>
  )
}
LoginAndRegisterPage.propTypes = {
  type: PropTypes.string.isRequired
}
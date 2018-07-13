import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../../../client/store/configureStore.dev';

import PageObjectBasePage from '../../../_patterns/page-object/poBasePage.pattern'

import pageElemMap from './elementmap'
import pageValidator from './validator'

import AuthForm from '../../../../client/components/user-auth/AuthForm';
import { authProps } from '../../../_mocks/pages/authroute/props';

import { inputChangeHelper } from '../../../_utils/enzyme.utils';

export default class LoginBase extends PageObjectBasePage
{
  constructor()
  {
    super({
      component:<AuthForm {...authProps} />,
      pageElemMap,
      pageValidator
    });
  }

  formFocus()
  { this.Map.inputUser.simulate('focus'); }
  changeInputVal(o)
  {
    this.Map.inputUser.simulate('change', inputChangeHelper(o.username));
    this.Map.inputPassword.simulate('change',  inputChangeHelper(o.pass) );
  }
  submitForm()
  { this.Map.loginSubmitButton.simulate('click') }
}

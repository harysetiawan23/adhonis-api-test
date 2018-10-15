'use strict'

class AuthController {

  async getLogin({request,response}){

  }

  async login({request,response,auth}){
    const {email,password} = request.all();
    const {type,token,refreshToken} = await auth
      .authenticator('jwt')
      .withRefreshToken()
      .attempt(email,password);


    const data = {
      'token':token,
      'type':type,
      'refresh_token':refreshToken
    };
    return response.status(200).json(data)
  }

  async postLogout({auth,response}){
    await auth.logout();
  }

  async getProfile({auth,response}){
    const user = await auth.user.toJSON();
    return response.status(200).json(user);

  }
}

module.exports = AuthController

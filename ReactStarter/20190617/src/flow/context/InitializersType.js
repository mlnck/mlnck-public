export type ContextLandingType = {
  cookiesAccept:boolean,
  gdprAccept:boolean,
  optIn?: boolean,
}

export type ContextUserType = {
  email?:string,
  emailVerified:boolean,
  firstName:string,
  lastName:string,
  salt?:string,
}

export type ContextWritersBlockType = {
  Landing: ContextLandingType,
  User: ContextUserType
}
interface StatusCodeType {
  [key: string]: number
}

const statusCode: StatusCodeType = {
  [404]: 404,
  [200]: 200,
  [201]: 201,
}

export default statusCode;
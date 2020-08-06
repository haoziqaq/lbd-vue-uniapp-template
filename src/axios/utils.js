/**
 * @description 后端状态码
 * @author 齐皓
 * @Date 2020/4/21
 */


/**
 * @des 后端状态码枚举
 */
export const Codes = {
  SUCCESS: 200,
}

export const CodeMessages = {
  [Codes.SUCCESS]: '请求成功',
}

/**
 * @des 后端返回状态码处理函数
 */
export const CodeHandlers = {

}

/**
 * @des 不需要提示的状态码
 */
export const NotPromptMessageCodes = [
  Codes.SUCCESS
];

export function useRequest(request) {
  return new Promise(((resolve, reject) => {
    request
      .then(({ data }) => {
        if (data?.code === Codes.SUCCESS) {
          resolve({
            isSuccess: true,
            data,
            errorMessage: null,
          })
        } else {
          resolve({
            isSuccess: false,
            data,
            errorMessage: null,
          });
        }
      })
      .catch((errorMessage) => {
        reject({
          isSuccess: false,
          data: null,
          errorMessage: JSON.stringify(errorMessage)
        })
      })
  }))
}

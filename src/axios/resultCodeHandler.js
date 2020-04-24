import { codeHandlers, notPromptMessageCode } from "./code";

export default async function (response) {
  if (response?.statusCode === 200) {
    const responseCode = response?.data?.code;
    const responseMessage = response?.data?.msg;
    codeHandlers.has(responseCode) && codeHandlers.get(responseCode)(response);
    if (!notPromptMessageCode.includes(responseCode)) {
      responseMessage && uni.showToast({ title: responseMessage });
    }
  } else {
    if (response) {
      uni.showToast({ title: `服务端${response.statusCode}错误` });
    } else {
      uni.showToast({ title: '网络环境异常' });
    }
  }
}


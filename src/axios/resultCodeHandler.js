import { CodeHandlers, NotPromptMessageCodes } from "./utils";

export default async function (response) {
  if (response?.statusCode === 200) {
    const responseCode = response?.data?.code;
    const responseMessage = response?.data?.msg;
    CodeHandlers[responseCode] && CodeHandlers[responseCode](response);
    if (!NotPromptMessageCodes.includes(responseCode)) {
      responseMessage && uni.showToast({ title: responseMessage });
    }
  } else {
    if (response) {
      uni.showToast({ title: `服务端${response.statusCode}错误`, icon: 'none' });
    } else {
      uni.showToast({ title: '网络环境异常', icon: 'none' });
    }
  }
}


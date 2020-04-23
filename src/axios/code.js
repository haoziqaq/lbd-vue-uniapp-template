/**
 * @description 后端状态码
 * @author 齐皓
 * @Date 2020/4/21
 */

import MultiMap from "../utils/MultiMap";

/**
 * @des 后端状态码枚举
 */
export const CODE = new MultiMap([
  ['SUCCESS', 200, '请求成功'],
]);


/**
 * @des 后端返回状态码处理函数
 */
export const codeHandlers = new Map([

]);

/**
 * @des 不需要提示的状态码
 */
export const notPromptMessageCode = [
  CODE.getValue('SUCCESS'),
];

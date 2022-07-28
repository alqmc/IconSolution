import request from './config';
//🌸定义ResponseOption的规则，里面定义的规则在使用的时候必须有
export interface ResponseOption {
  status: number;
  message: string;
  data: string | number | object | Array<any>;
}
//🌸data?代表data可传可不传，any是任意类型
const buildGenerateApi = (data?: any): Promise<ResponseOption> => {
  return request.post('/pkg/build', data);
};

const createGenerateApi = (data?: any): Promise<ResponseOption> => {
  return request.post('/pkg/create', data);
};

const createIconApi = (data?: any): Promise<ResponseOption> => {
  return request.post('/icon/create', data);
};
export { buildGenerateApi, createGenerateApi, createIconApi };
